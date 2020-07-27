import { useRouter } from 'next/router';
import React from 'react';

import { MainLayout } from '../../src/layouts';

export default function Post() {
  const router = useRouter();

  return (
    <MainLayout title={`Posts ${router.query.id}`}>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </MainLayout>
  );
}
