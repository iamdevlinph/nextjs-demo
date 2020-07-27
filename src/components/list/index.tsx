import clsx from 'clsx';
import React from 'react';

import { hasColorClass } from '../../utils';
import { defaultTextColors } from '../text';

export const ListItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <li
      className={clsx(
        !hasColorClass(className) && defaultTextColors,
        className
      )}
    >
      {children}
    </li>
  );
};

type ListProps = {
  className?: string;
  itemClassName?: string;
  items: string[];
};

export const commonListStyle = 'list-inside';

export const OL: React.FC<ListProps> = ({
  className,
  itemClassName,
  items,
}) => {
  return (
    <ol className={clsx('list-decimal', commonListStyle, className)}>
      {items.map((item, idx) => {
        return (
          <ListItem key={idx} className={itemClassName}>
            {item}
          </ListItem>
        );
      })}
    </ol>
  );
};

export const UL: React.FC<ListProps> = ({
  className,
  itemClassName,
  items,
}) => {
  return (
    <ul className={clsx('list-disc', commonListStyle, className)}>
      {items.map((item, idx) => {
        return (
          <ListItem key={idx} className={itemClassName}>
            {item}
          </ListItem>
        );
      })}
    </ul>
  );
};
