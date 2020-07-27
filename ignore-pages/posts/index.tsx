import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { MainLayout } from '../../src/layouts';

interface PostLinkProps {
  id: string;
}

const PostLink: React.FC<PostLinkProps> = (props) => {
  const { id } = props;
  const title = id.split('-').join(' ');
  return (
    <li>
      <Link href="/posts/[id]" as={`/posts/${id}`}>
        <PostLinkTitle>{title}</PostLinkTitle>
      </Link>
    </li>
  );
};

const Posts: React.FC = () => {
  return (
    <MainLayout title="Posts">
      <h1>My Blog 🐱‍🏍</h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </MainLayout>
  );
};

export default Posts;

const PostLinkTitle = styled.a`
  text-transform: capitalize;
  cursor: pointer;
  border-bottom: 1px solid blue;
`;
