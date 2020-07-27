import React from 'react';

import { SocialMedia } from './index';

export const TwitterMeta: React.FC<SocialMedia> = (props) => {
  const {
    title,
    description,
    url = 'https://nextjs-demo.iamdevlinph.vercel.app/',
  } = props;
  return (
    <>
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={process.env.logoPng} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={description} />
    </>
  );
};
