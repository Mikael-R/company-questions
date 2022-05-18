const { resolve } = require('path')

module.exports = {
  stories: ['../src/**/stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
    'storybook-addon-styled-components-themes/register'
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: resolve(__dirname, '../src/components'),
      styles: resolve(__dirname, '../src/styles'),
      utils: resolve(__dirname, '../src/utils')
    }
    return config
  }
}
