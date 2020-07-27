// https://github.com/zeit/next.js/blob/canary/examples/with-tailwindcss/postcss.config.js
module.exports = {
  plugins: [
    'tailwindcss',
    process.env.NODE_ENV === 'production'
      ? [
          '@fullhuman/postcss-purgecss',
          {
            content: [
              './pages/**/*.{js,jsx,ts,tsx}',
              './src/**/*.{js,jsx,ts,tsx}',
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:%]+(?<!:)/g) || [],
            whitelist: ['html', 'body', 'dark-mode'],
          },
        ]
      : undefined,
    'postcss-preset-env',
  ],
};
