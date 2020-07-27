import React from 'react';

import { Logo, NavbarItems } from '../src/components';
import { HomeLayout } from '../src/layouts';

const Index: React.FC = () => {
  return (
    <>
      <HomeLayout>
        <Logo className="w-24" isSquare={false} />
        <NavbarItems
          className="flex flex-row flex-wrap justify-around w-full mt-5 lowercase sm:flex-col sm:mt-0 sm:w-auto"
          anchorClassName="px-1"
        />
      </HomeLayout>
    </>
  );
};

export default Index;
