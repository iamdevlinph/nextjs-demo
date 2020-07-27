import React from 'react';

import { Anchor, HeadComponent, Logo, NavbarItems } from '../components';
import { LayoutWrapper } from './layoutWrapper';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <LayoutWrapper>
      <HeadComponent title={title} />
      <div className="relative w-0 sm:w-64">
        <div className="sm:sticky sm:top-25% sm:flex sm:flex-col hidden">
          <Anchor href="/">
            <Logo
              className="w-5 mx-2 sm:ml-auto sm:w-16 sm:mx-0"
              isSquare={false}
            />
          </Anchor>
          <NavbarItems
            className="flex-row hidden px-2 mt-2 -mx-2 space-x-2 text-right lowercase sm:flex sm:mt-3 sm:ml-0 sm:flex-col"
            anchorClassName="px-1"
          />
        </div>
      </div>
      <div className="w-full mx-5 mt-16 sm:w-11/12 sm:mt-12 sm:mb-8">
        {children}
      </div>
    </LayoutWrapper>
  );
};
