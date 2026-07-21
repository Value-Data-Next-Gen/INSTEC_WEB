/** @type {import('next').NextConfig} */
const nextConfig = {
  // Para Netlify deployment
  trailingSlash: true,
  output: 'export',
  // El build usa `.next` (por defecto) y el export estático se genera en `out/`.
  // Antes se forzaba distDir: 'out', lo que hacía que `next dev` sobreescribiera
  // la carpeta `out/` publicada, mezclando caché de desarrollo con el deploy.
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during builds
  },
  images: {
    unoptimized: true, // Necesario para static export
  },
}

module.exports = nextConfig