import React, {useState, useMemo} from 'react';

import TutorialModalBodyContext from './TutorialModalBodyContext';

const TutorialModalBodyProvider: React.FC = ({children}) => {
  const [minimized, setMinimized] = useState(false);

  const providerValue = useMemo(
    () => ({
      minimized,
      setMinimized,
    }),
    [minimized, setMinimized],
  );

  return (
    <TutorialModalBodyContext.Provider value={providerValue}>
      {children}
    </TutorialModalBodyContext.Provider>
  );
};

export default TutorialModalBodyProvider;
