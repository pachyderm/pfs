import classnames from 'classnames';
import React from 'react';

import {useDropdown} from 'Dropdown';
import usePreviousValue from 'hooks/usePreviousValue';

import styles from './DropdownMenu.module.css';

export interface DropdownMenuProps {
  className?: string;
  pin?: 'left' | 'right';
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  className,
  pin = 'left',
  ...rest
}) => {
  const {isOpen, sideOpen} = useDropdown();
  const previouslyOpened = usePreviousValue(isOpen);

  const classes = classnames(styles.base, className, {
    [styles.open]: isOpen,
    [styles.close]: !isOpen && previouslyOpened,
    [styles.left]: pin === 'left',
    [styles.right]: pin === 'right',
    [styles.sideOpen]: sideOpen,
  });

  return (
    <div role="menu" className={classes} aria-hidden={!isOpen} {...rest}>
      {children}
    </div>
  );
};

export default DropdownMenu;
