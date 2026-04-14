import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VoltaEdge Engineering',
    short_name: 'VoltaEdge',
    description: 'Elite technical energy infrastructure and renewable engineering solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#00253B',
    theme_color: '#00253B',
    icons: [
      {
        src: '/favicon/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/favicon/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
