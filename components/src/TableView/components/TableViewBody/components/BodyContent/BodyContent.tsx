import React from 'react';

import {Tabs} from '@pachyderm/components';

export type BodyContentProps = {
  id: string;
};

const BodyContent: React.FC<BodyContentProps> = ({id, children}) => {
  return <Tabs.TabPanel id={id}>{children}</Tabs.TabPanel>;
};

export default BodyContent;
