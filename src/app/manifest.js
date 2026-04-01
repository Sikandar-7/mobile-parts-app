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
        src: '/site-logo.webp',
        sizes: '192x192',
        type: 'image/webp',
        purpose: 'any maskable',
      },
      {
        src: '/site-logo.webp',
        sizes: '512x512',
        type: 'image/webp',
        purpose: 'any maskable',
      },
    ],
  }
}
