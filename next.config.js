/** @type {import('next').NextConfig} */
const withImages = require("next-images");
const nextConfig = {
    reactStrictMode: true,
    withImages,
    compiler: {
        styledComponents: true,
    },
};
// next.config.js

module.exports = nextConfig;