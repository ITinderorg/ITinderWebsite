/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/ITpartners": { page: "/ITpartners" },
    };
  },
  /*i18n: {
    locales: ["ua"],
    defaultLocale: "ua",
    domains: [
      {
        domain: "itinder.com.ua",
        defaultLocale: "en-US",
        http: true,
      },
    ],
  },*/
};

module.exports = nextConfig;
