/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};
const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
module.exports = withMDX();
