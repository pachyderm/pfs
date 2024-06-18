"""Handwritten classes/methods that augment the existing CDR API."""
import gzip
from hashlib import blake2b
from hmac import compare_digest
from urllib.parse import urlparse

from betterproto import which_one_of
import requests

from . import (
    Ref,
    Cipher, Compress, Concat, ContentHash, Http, SizeLimits, Slice,
    CipherAlgo, CompressAlgo, HashAlgo,
)

try:
    from Crypto.Cipher import ChaCha20
    CDR_ENABLED = True
except ImportError:
    ChaCha20 = None
    CDR_ENABLED = False


class CdrResolver:
    """Class capable of resolving CDRs returned by the PFS API."""

    def __init__(self, *, http_host_replacement: str = ''):
        """ Creates a CdrResolver.
        Whether CDR functionality is enabled is checked at time of initialization.

        Parameters
        ----------
        http_host_replacement : str
            The value of this parameter replaces the host (including port) within
            the presigned URLs when resolving CDRs. This configuration is useful
            if, for some reason, the URL that pachd uses to interact with object
            storage is different from the one that you use. For example, if your
            Pachyderm object storage is running within your kubernetes cluster and
            pachd is configured to use a URL which is only valid in cluster.
            This may fix any issues, depending on the object storage and how they
            generate presigned URLs.
            Example: localhost:9000
        """
        if not CDR_ENABLED:
            raise RuntimeError(
                f"CDR functionality is not enabled for this installation "
                f"of the pachyderm_sdk package. \n"
                f"To enable CDR functionality, reinstall package with: \n"
                f"  - pip install pachyderm_sdk[cdr]"
            )
        self.http_host_replacement = http_host_replacement

    def resolve(self, ref: Ref) -> bytes:
        """Resolve a CDR reference."""
        field, body = which_one_of(ref, "body")
        if isinstance(body, Http):
            return self._dereference_http(body)
        elif isinstance(body, Cipher):
            return self._dereference_cipher(body)
        elif isinstance(body, Compress):
            return self._dereference_compress(body)
        elif isinstance(body, ContentHash):
            return self._dereference_content_hash(body)
        elif isinstance(body, SizeLimits):
            return self._dereference_size_limits(body)
        elif isinstance(body, Concat):
            return b''.join(map(self.resolve, body.refs))
        elif isinstance(body, Slice):
            return self.resolve(body.inner)[body.start:body.end]
        else:
            raise ValueError(f"unsupported Ref variant: {body}")

    def _dereference_http(self, body: Http) -> bytes:
        """Resolves an HTTP CDR. This means retrieving the data from object
        storage using a presigned URL.

        The HTTP CDR is the "bottom" of the CDR structure and therefore resolution
        does not recurse any deeper.

        If http_host_replacement was configured on the class, this substitution
        is made here. Additionally the Host header will be overwritten with the
        original host of the presigned URL.
        """
        url, headers = body.url, body.headers
        if self.http_host_replacement:
            parsed_url = urlparse(body.url)
            headers['Host'] = parsed_url.netloc
            url = parsed_url._replace(netloc=self.http_host_replacement).geturl()

        response = requests.get(url=url, headers=headers)
        response.raise_for_status()
        return response.content

    def _dereference_cipher(self, body: Cipher) -> bytes:
        """Resolves a Cipher CDR. This method must resolve its inner CDR."""
        if body.algo != CipherAlgo.CHACHA20:
            raise ValueError(f"unrecognized cipher algorithm: {body.algo}")
        inner = self.resolve(body.inner)
        cipher = ChaCha20.new(key=body.key, nonce=body.nonce)
        return cipher.decrypt(inner)

    def _dereference_compress(self, body: Compress) -> bytes:
        """Resolves a Compress CDR. This method must resolve its inner CDR."""
        if body.algo != CompressAlgo.GZIP:
            raise ValueError(f"unrecognized compress algorithm: {body.algo}")
        inner = self.resolve(body.inner)
        return gzip.decompress(inner)

    def _dereference_content_hash(self, body: ContentHash) -> bytes:
        """Resolves a ContentHash CDR. This method must resolve its inner CDR."""
        if body.algo != HashAlgo.BLAKE2b_256:
            raise ValueError(f"unrecognized hash algorithm: {body.algo}")
        inner = self.resolve(body.inner)
        inner_hash = blake2b(inner, digest_size=32).digest()
        if not compare_digest(inner_hash, body.hash):
            raise ValueError(
                f"content failed hash check. "
                f"HAVE: {inner_hash} "
                f"WANT: {body.hash}"
            )
        return inner

    def _dereference_size_limits(self, body: SizeLimits) -> bytes:
        """Resolves a SizeLimits CDR. This method must resolve its inner CDR."""
        inner = self.resolve(body.inner)
        if body.min and len(inner) < body.min:
            raise ValueError(
                f"content failed minimum size check. "
                f"HAVE: {len(inner)} bytes "
                f"WANT: {body.min} bytes "
            )
        if body.max and len(inner) > body.max:
            raise ValueError(
                f"content failed minimum size check. "
                f"HAVE: {len(inner)} bytes "
                f"WANT: {body.max} bytes "
            )
        return inner
