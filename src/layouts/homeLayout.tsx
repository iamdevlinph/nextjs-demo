import React from 'react';

import { HeadComponent } from '../components';
import { LayoutWrapper } from './layoutWrapper';

type HomeLayout = {
  children: React.ReactNode;
};

export const HomeLayout: React.FC = (props) => {
  const { children } = props;
  return (
    <LayoutWrapper>
      <HeadComponent />
      <div className="flex flex-col items-center justify-center w-48 h-screen m-auto sm:space-x-4 sm:flex-row sm:justify-between">
        {children}
      </div>
    </LayoutWrapper>
  );
};
