import { useRouter } from 'next/router';
import React from 'react';

import { Anchor } from '../anchor';

type NavbarItemsProps = {
  className: string;
  itemClassName?: string;
  anchorClassName?: string;
};

export const NavbarItems: React.FC<NavbarItemsProps> = (props) => {
  const router = useRouter();
  const { className, itemClassName, anchorClassName } = props;
  const links = ['about', 'components'];
  const currentRoute = router.route.replace('/', '').split('/');
  return (
    <div className={className}>
      {links.map((link, idx) => (
        <div key={`${link}-${idx}`} className={itemClassName}>
          <Anchor
            href={`/${link}`}
            active={link === currentRoute[0]}
            className={anchorClassName}
          >
            {link}
          </Anchor>
        </div>
      ))}
    </div>
  );
};
