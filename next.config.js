/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

// next.config.js
module.exports = {
  // Other Next.js configuration options...
  // ...
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/fonts/",
          outputPath: "static/fonts/",
        },
      },
    });

    return config;
  },
};
