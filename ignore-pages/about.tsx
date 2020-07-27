import React from 'react';

import { MainLayout } from '../src/layouts';

const About: React.FC = () => {
  return (
    <MainLayout title="About">
      <h1>This is About page ✌</h1>
      <p>Hello this is the about page</p>
    </MainLayout>
  );
};

export default About;
