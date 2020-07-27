import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { MobileNav } from '../components';

// disable ssr for this component
const ThemeSwitch = dynamic(
  () => import('../components/themeSwitch/themeSwitch'),
  {
    ssr: false,
  }
);

type LayoutWrapper = {
  children: React.ReactNode;
};

export const LayoutWrapper: React.FC<LayoutWrapper> = (props) => {
  const router = useRouter();
  const currentRoute = router.route.replace('/', '');
  const hideMobileNavbar = currentRoute === '';
  const [isShowMobileNav, showMobileNav] = useState(false);

  return (
    <div>
      <div className="fixed w-full px-2 py-4 text-right bg-gray-100 sm:py-2 dark:bg-black">
        {!hideMobileNavbar && (
          <MobileNav
            isShowMobileNav={isShowMobileNav}
            showMobileNav={showMobileNav}
          />
        )}

        <ThemeSwitch />
      </div>
      <div
        className="flex min-h-screen bg-gray-300 dark:bg-gray-900"
        onClick={() => {
          showMobileNav(false);
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
