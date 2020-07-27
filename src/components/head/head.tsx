import Head from 'next/head';
import React from 'react';

import { GoogleTag } from './google-tag';
import { CommonMeta, FacebookMeta, TwitterMeta } from './meta';

interface HeadProps {
  title?: string;
}

function generatePageTitle(title: string) {
  const BASE_PAGE_TITLE = process.env.baseTitle;
  let pageTitle = BASE_PAGE_TITLE;
  if (title) {
    pageTitle += ` | ${title}`;
  }

  return pageTitle;
}

export const HeadComponent: React.FC<HeadProps> = (props) => {
  const { title = 'JavaScript Developer' } = props;

  const description = 'Dev the person';

  return (
    <Head>
      <title>{generatePageTitle(title)}</title>
      <GoogleTag />

      <CommonMeta description={description} />
      <FacebookMeta title={title} description={description} />
      <TwitterMeta title={title} description={description} />

      {/* Fontello for Icons */}
      <link rel="stylesheet" href="/css/animation.css" />
      <link rel="stylesheet" href="/css/fontello-codes.css" />
      <link rel="stylesheet" href="/css/fontello-embedded.css" />
      <link rel="stylesheet" href="/css/fontello-ie7-codes.css" />
      <link rel="stylesheet" href="/css/fontello-ie7.css" />
      <link rel="stylesheet" href="/css/fontello.css" />

      {/* Font */}
      <link
        href="https://fonts.googleapis.com/css?family=Muli&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};
