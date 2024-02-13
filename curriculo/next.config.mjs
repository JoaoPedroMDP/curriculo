/** @type {import('next').NextConfig} */
const nextConfig = {};

// Localmente, eu desejo rodar sem ser standalone, para ter o HotReload ativado
if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'standalone'
}

export default nextConfig;