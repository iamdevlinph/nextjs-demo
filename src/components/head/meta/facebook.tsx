import React from 'react';

import { SocialMedia } from './index';

type FacebookMeta = {
  type?: 'website' | 'article';
} & SocialMedia;

export const FacebookMeta: React.FC<FacebookMeta> = (props) => {
  const {
    title,
    description,
    type = 'website',
    url = 'https://nextjs-demo.iamdevlinph.vercel.app/',
  } = props;
  return (
    <>
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={process.env.logoPng} />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="500" />
    </>
  );
};
