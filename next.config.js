
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
//const createNextIntlPlugin = require('next-intl/plugin');
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
      },
      images: { unoptimized: true },
};
if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}
module.exports = withNextIntl(nextConfig);


