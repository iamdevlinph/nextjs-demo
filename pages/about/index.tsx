import React from 'react';

import { Text } from '../../src/components';
import { MainLayout } from '../../src/layouts';

const AboutPage: React.FC = () => {
  return (
    <MainLayout title="About">
      <Text as="h4">About</Text>

      <Text>This is the about page.</Text>
    </MainLayout>
  );
};

export default AboutPage;
