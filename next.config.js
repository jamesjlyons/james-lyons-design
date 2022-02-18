/** @type {import('next').NextConfig} */

// module.exports = {
//   reactStrictMode: true,
// };

const { withContentlayer } = require("next-contentlayer");
module.exports = withContentlayer()({
  reactStrictMode: true,
});
