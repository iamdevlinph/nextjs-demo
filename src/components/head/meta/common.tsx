import React from 'react';

import { Meta } from './index';

type CommonMeta = Omit<Meta, 'title'>;

export const CommonMeta: React.FC<CommonMeta> = (props) => {
  const { description } = props;

  return (
    <>
      <link rel="shortcut icon" type="image/x-icon" href={process.env.icoUrl} />
      {/* <meta charset="utf-8" /> */}
      <meta name="description" content={description} />
      <meta name="theme-color" content="#BA0202" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="manifest" href="/manifest.json" />
    </>
  );
};
