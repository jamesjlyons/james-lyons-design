// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const postcssPresetEnv = require("postcss-preset-env");
const postcssNesting = require("postcss-nesting");
const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/css/*.css")],
    });
}

module.exports = {
  siteName: "James Lyons",
  siteUrl: "https://www.jameslyons.design",
  titleTemplate: "%s",
  icon: "./src/favicon.svg",
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];

    types.forEach((type) => {
      addStyleResource(config.module.rule("css").oneOf(type));
    });

    // or if you use scss
    types.forEach((type) => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcssPresetEnv, postcssNesting],
      },
    },
  },
  plugins: [
    {
      use: "gridsome-plugin-plausible",
    },
    {
      use: "@gridsome/plugin-critical",
      options: {
        paths: ["/"],
        width: 1300,
        height: 900,
      },
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        baseDir: "./src/content/projects/", // Where .md files are located
        // typeName: "Project", // Required
        path: "src/content/projects/**/*.md",
        typeName: "Project",
        template: "./src/templates/Project.vue",
        route: "/project/:slug",
        remark: {
          imageQuality: 100,
        },
      },
    },
  ],
};
