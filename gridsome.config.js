// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const postcssPresetEnv = require('postcss-preset-env');
const postcssNesting = require('postcss-nesting');

module.exports = {
  siteName: 'James Lyons',
  siteUrl: 'https://www.jameslyons.design',
  titleTemplate: '🦁 %s',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [ postcssPresetEnv, postcssNesting ]
      }
    }
  },
  plugins: [
      {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-115297912-2'
      }
    }
  ]
}
