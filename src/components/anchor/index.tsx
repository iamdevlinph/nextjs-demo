import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { hasColorClass } from '../../utils';

type AnchorProps = {
  href: string;
  className?: string;
  children?: React.ReactNode | string;
  external?: boolean;
  active?: boolean;
  block?: boolean;
};

function generateAnchorText(
  children: string,
  className = '',
  block = false,
  href = '#',
  external = false,
  active = false
) {
  const anchorStyle = 'cursor-pointer transition ease-in duration-150';
  const defaultFontColors =
    'text-red-900 dark:text-red-300 hover:bg-red-300 hover:text-black';
  return (
    <div className={clsx(block ? 'block' : 'inline-block')}>
      <a
        href={href}
        className={clsx(
          !hasColorClass(className) && defaultFontColors,
          className,
          anchorStyle,
          active && 'underline'
        )}
        target={external ? '_blank' : ''}
      >
        {children}
      </a>
    </div>
  );
}

export const Anchor: React.FC<AnchorProps> = ({
  href,
  children,
  className = '',
  block = false,
  external,
  active,
}) => {
  const content =
    typeof children === 'string' ? (
      generateAnchorText(children, className, block, href, false, active)
    ) : (
      <a className={clsx(className)}>{children}</a>
    );

  if (external && typeof children === 'string') {
    return generateAnchorText(children, className, block, href, true);
  }

  return <Link href={href}>{content}</Link>;
};
