import clsx from 'clsx';
import React from 'react';

import { hasColorClass } from '../../utils';

type Text = {
  children: React.ReactNode;
  className?: string;
  bold?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'span';
};

export const defaultTextColors = 'text-gray-800 dark:text-gray-300';

export const Text: React.FC<Text> = ({
  children,
  className = '',
  bold = null,
  as = 'p',
}) => {
  let text = null;

  const isDefaultBold =
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(as) && bold === null;

  const combineClassName = clsx(
    !hasColorClass(className) && defaultTextColors,
    className,
    (bold || isDefaultBold) && 'font-bold'
  );

  switch (as) {
    case 'h1':
      text = <h1 className={clsx('text-6xl', combineClassName)}>{children}</h1>;
      break;

    case 'h2':
      text = <h2 className={clsx('text-5xl', combineClassName)}>{children}</h2>;
      break;

    case 'h3':
      text = <h3 className={clsx('text-4xl', combineClassName)}>{children}</h3>;
      break;

    case 'h4':
      text = <h4 className={clsx('text-3xl', combineClassName)}>{children}</h4>;
      break;

    case 'h5':
      text = <h5 className={clsx('text-2xl', combineClassName)}>{children}</h5>;
      break;

    case 'h6':
      text = <h6 className={clsx('text-xl', combineClassName)}>{children}</h6>;
      break;

    case 'span':
      text = <span className={clsx(combineClassName)}>{children}</span>;
      break;

    case 'small':
      text = <small className={clsx(combineClassName)}>{children}</small>;
      break;

    case 'p':
    default:
      text = <p className={clsx(combineClassName)}>{children}</p>;
  }

  return text;
};
