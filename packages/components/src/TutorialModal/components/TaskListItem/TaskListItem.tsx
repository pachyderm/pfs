import React from 'react';

import {PureCheckbox} from '../../../Checkbox';
import {Section} from '../../lib/types';

import styles from './TaskListItem.module.css';

type TaskListItemProps = {
  index: number;
  currentTask: number;
  task: Section['taskName'];
};

const TaskListItem: React.FC<TaskListItemProps> = ({
  index,
  currentTask,
  task,
  children,
}) => {
  return (
    <div className={styles.taskItem}>
      <PureCheckbox
        selected={currentTask > index}
        readOnly
        label={task}
        checked={currentTask > index}
      />
      {children}
    </div>
  );
};

export default TaskListItem;
