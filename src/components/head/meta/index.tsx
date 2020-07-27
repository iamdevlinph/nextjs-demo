export * from './facebook';
export * from './common';
export * from './twitter';

export type Meta = {
  title: string;
  description: string;
};

export type SocialMedia = {
  url?: string;
} & Meta;
