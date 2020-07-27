import clsx from 'clsx';
import React from 'react';

import { Anchor } from '../anchor';
import { Logo } from '../logo';
import { NavbarItems } from './navbar-items';

type MobileNavProps = {
  isShowMobileNav: boolean;
  showMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileNav: React.FC<MobileNavProps> = ({
  isShowMobileNav,
  showMobileNav,
}) => {
  return (
    <div className="fixed flex flex-col mr-2 -mt-2 text-left sm:hidden">
      <Anchor href="/" className="fixed">
        <Logo className="w-5" isSquare={false} />
      </Anchor>
      <i
        className={clsx(
          'absolute dark:text-white text-black mt-3 text-xl ml-10 sm:hidden cursor-pointer',
          isShowMobileNav ? 'icon-cancel' : 'icon-menu'
        )}
        onClick={() => {
          showMobileNav(!isShowMobileNav);
        }}
      />
      {isShowMobileNav && (
        <NavbarItems
          className="fixed flex flex-row w-screen px-2 pb-3 -mx-2 lowercase bg-gray-100 mt-12 dark:bg-black text-lg"
          itemClassName="flex-grow"
        />
      )}
    </div>
  );
};
