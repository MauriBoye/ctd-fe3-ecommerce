/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  },
  i18n: {
    locales: ["es-ES", "en-US", "pt-BR"],
    defaultLocale: "es-ES",
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
