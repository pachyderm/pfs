import React, {useEffect, useState, useCallback} from 'react';

import useLocalProjectPreferences from '@dash-frontend/hooks/useLocalProjectPreferences';
import useUrlQueryState from '@dash-frontend/hooks/useUrlQueryState';
import useUrlState from '@dash-frontend/hooks/useUrlState';

const SIDEBAR_MIN_WIDTH = 304;
const SIDEBAR_MAX_WIDTH = 700;

const useSidebar = ({defaultSize}: {defaultSize?: string}) => {
  let sidebarSize = 304;
  if (defaultSize === 'md') sidebarSize = 385;
  if (defaultSize === 'lg') sidebarSize = 534;

  const [isOpen, setIsOpen] = useState(false);
  const {viewState, setUrlFromViewState} = useUrlQueryState();
  const {projectId} = useUrlState();
  const localPreferences = useLocalProjectPreferences({projectId});
  const [sidebarWidth, setSidebarWidth] = useState<number>(
    viewState.sidebarWidth || localPreferences.sidebarWidth || sidebarSize,
  );
  useEffect(() => {
    if (!viewState.sidebarWidth && !localPreferences.sidebarWidth) {
      setSidebarWidth(sidebarSize);
    }
  }, [localPreferences.sidebarWidth, sidebarSize, viewState.sidebarWidth]);

  const [dragging, setDragging] = useState(false);

  const throttleMouseEvent = useCallback(
    (
      callback: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
      interval: number,
    ) => {
      let enableCall = true;

      return (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!enableCall || !dragging) return;

        enableCall = false;
        callback(e);
        setTimeout(() => (enableCall = true), interval);
      };
    },
    [dragging],
  );

  const applyMousePosition = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const newWidth = window.innerWidth - e.clientX;
      if (newWidth >= SIDEBAR_MIN_WIDTH && newWidth <= SIDEBAR_MAX_WIDTH) {
        setSidebarWidth(newWidth);
      }
    },
    [],
  );

  const onDragEnd = useCallback(() => {
    if (dragging) {
      setUrlFromViewState({sidebarWidth});
      localPreferences.handleUpdateSidebarWidth(sidebarWidth);
    }
    setDragging(false);
  }, [dragging, localPreferences, setUrlFromViewState, sidebarWidth]);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return {
    isOpen,
    sidebarWidth,
    dragging,
    setDragging,
    throttleMouseEvent,
    applyMousePosition,
    onDragEnd,
  };
};

export default useSidebar;
