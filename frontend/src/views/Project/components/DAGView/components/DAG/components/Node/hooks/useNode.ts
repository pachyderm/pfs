import {NodeType} from '@graphqlTypes';
import {select} from 'd3-selection';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {useHistory} from 'react-router';

import useLogsNavigation from '@dash-frontend/hooks/useLogsNavigation';
import useUrlState from '@dash-frontend/hooks/useUrlState';
import {Node} from '@dash-frontend/lib/types';
import useHoveredNode from '@dash-frontend/providers/HoveredNodeProvider/hooks/useHoveredNode';
import useDAGRouteController from '@dash-frontend/views/Project/components/DAGView/hooks/useDAGRouteController';
import {NODE_WIDTH} from '@dash-frontend/views/Project/constants/nodeSizes';
import {pipelineRoute} from '@dash-frontend/views/Project/utils/routes';
import {useClipboardCopy} from '@pachyderm/components';
import deriveRepoNameFromNode from 'lib/deriveRepoNameFromNode';

const LABEL_WIDTH = NODE_WIDTH - 40;

const useNode = (node: Node, isInteractive: boolean, hideDetails: boolean) => {
  const {
    navigateToNode,
    selectedPipeline,
    selectedRepo,
    pipelinePathMatch,
    repoPathMatch,
  } = useDAGRouteController();
  const {projectId} = useUrlState();
  const {getPathToLatestJobLogs} = useLogsNavigation();
  const browserHistory = useHistory();
  const {hoveredNode, setHoveredNode} = useHoveredNode();
  const [showSuccess, setShowSuccess] = useState(false);
  const {copy, supported, copied, reset} = useClipboardCopy(node.name);

  const isEgress = node.type === NodeType.EGRESS;
  const noAccess = !node.access;

  const groupName = useMemo(() => {
    let nodeName = deriveRepoNameFromNode(node);
    // Need to have a string that works as a valid query selector.
    // urls (and url-encoded urls) are not valid query selectors.
    if (node.name && node.type === NodeType.EGRESS) {
      const {host} = new URL(node.name);

      nodeName = host.replace('.com', '');
    }

    return `GROUP_${nodeName}`;
  }, [node]);

  const onClick = useCallback(
    (destination: 'pipeline' | 'repo' | 'logs' | 'status') => {
      if (noAccess) return;
      if (isInteractive && isEgress && supported) return copy();
      if (destination === 'logs') {
        return browserHistory.push(
          getPathToLatestJobLogs({
            projectId,
            pipelineId: node.name,
          }),
        );
      }
      if (destination === 'status') {
        return browserHistory.push(
          pipelineRoute({
            projectId,
            pipelineId: node.name,
            tabId: 'info',
          }),
        );
      }
      if (isInteractive) navigateToNode(node, destination);
    },
    [
      noAccess,
      isInteractive,
      isEgress,
      supported,
      copy,
      navigateToNode,
      node,
      browserHistory,
      getPathToLatestJobLogs,
      projectId,
    ],
  );

  const onMouseOver = useCallback(() => {
    if (isInteractive) {
      select(`#${groupName}`).raise();
      setHoveredNode(node.id);
    }
  }, [isInteractive, setHoveredNode, node, groupName]);

  const onMouseOut = useCallback(() => {
    if (isInteractive) setHoveredNode('');
  }, [isInteractive, setHoveredNode]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (copied) {
      setShowSuccess(true);

      timeout = setTimeout(() => {
        setShowSuccess(false);
        reset();
      }, 5000);
    }

    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [copied, reset]);

  useEffect(() => {
    select<SVGGElement, Node>(`#${groupName}`).data([node]);
  }, [groupName, node]);

  useEffect(() => {
    if (hideDetails) return;

    const text = select<SVGGElement, Node>(
      `#${groupName}`,
    ).select<SVGTextElement>('.nodeLabel');

    // remove old tspans on node name change
    text.selectAll<SVGTSpanElement, unknown>('tspan').remove();

    // create tspans
    const tspan = text
      .append('tspan')
      .attr('x', node.type === NodeType.INPUT_REPO ? 34 : 30)
      .attr('y', node.type === NodeType.INPUT_REPO ? 24 : 17);
    const normalizedNodeName = deriveRepoNameFromNode(node);
    const nameChars = normalizedNodeName.split('').reverse();
    const line: string[] = [];
    const tspanNode = tspan.node();

    const maxWidth =
      node.type === NodeType.INPUT_REPO ? LABEL_WIDTH - 6 : LABEL_WIDTH;

    while (nameChars.length > 0) {
      const char = nameChars.pop();
      if (char) {
        line.push(char);
        tspan.text(line.join(''));

        if (tspanNode && tspanNode.getComputedTextLength() > maxWidth) {
          line.splice(line.length - 3, 3, '...');
          tspan.text(line.join(''));
          break;
        }
      }
    }
  }, [node, groupName, hideDetails]);

  const isHovered = useMemo(
    () => hoveredNode === node.id,
    [hoveredNode, node.id],
  );

  const repoSelected =
    selectedRepo === deriveRepoNameFromNode(node) && !!repoPathMatch;

  const pipelineSelected =
    selectedPipeline === node.name && !!pipelinePathMatch;

  return {
    isHovered,
    onClick,
    onMouseOut,
    onMouseOver,
    repoSelected,
    pipelineSelected,
    groupName,
    isEgress,
    showSuccess,
  };
};

export default useNode;
