export default function manifest() {
  return {
    name: 'Chaudary Mobile Parts',
    short_name: 'Chaudary Parts',
    description: 'Shop premium mobile accessories, touch glass, tools, and spare parts.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0d4f4f',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  }
}
