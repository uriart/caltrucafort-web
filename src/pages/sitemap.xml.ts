export const GET = () => {
  const base = 'https://caltrucafort.com';

  const pages = [
    // Español (default, sin prefijo)
    { url: '/', lang: 'es', alternates: ['/en/', '/ca/'] },
    { url: '/rooms', lang: 'es', alternates: ['/en/rooms', '/ca/rooms'] },
    { url: '/cuisine', lang: 'es', alternates: ['/en/cuisine', '/ca/cuisine'] },
    { url: '/activities', lang: 'es', alternates: ['/en/activities', '/ca/activities'] },
    { url: '/contact', lang: 'es', alternates: ['/en/contact', '/ca/contact'] },

    // Inglés
    { url: '/en/', lang: 'en', alternates: ['/', '/ca/'] },
    { url: '/en/rooms', lang: 'en', alternates: ['/rooms', '/ca/rooms'] },
    { url: '/en/cuisine', lang: 'en', alternates: ['/cuisine', '/ca/cuisine'] },
    { url: '/en/activities', lang: 'en', alternates: ['/activities', '/ca/activities'] },
    { url: '/en/contact', lang: 'en', alternates: ['/contact', '/ca/contact'] },

    // Catalán
    { url: '/ca/', lang: 'ca', alternates: ['/', '/en/'] },
    { url: '/ca/rooms', lang: 'ca', alternates: ['/rooms', '/en/rooms'] },
    { url: '/ca/cuisine', lang: 'ca', alternates: ['/cuisine', '/en/cuisine'] },
    { url: '/ca/activities', lang: 'ca', alternates: ['/activities', '/en/activities'] },
    { url: '/ca/contact', lang: 'ca', alternates: ['/contact', '/en/contact'] },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => `  <url>
    <loc>${base}${page.url}</loc>
    <changefreq>weekly</changefreq>
${page.alternates.map(alt => `    <xhtml:link rel="alternate" hreflang="${alt.startsWith('/en') ? 'en' : alt.startsWith('/ca') ? 'ca' : 'es'}" href="${base}${alt}" />`).join('\n')}
    <xhtml:link rel="alternate" hreflang="${page.lang}" href="${base}${page.url}" />
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};
