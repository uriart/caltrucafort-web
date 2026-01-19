export const GET = () => {
  const pages = [
    { url: '/es/', lang: 'es', priority: '1.0' },
    { url: '/es/rooms', lang: 'es', priority: '0.9' },
    { url: '/es/cuisine', lang: 'es', priority: '0.9' },
    { url: '/es/activities', lang: 'es', priority: '0.9' },
    { url: '/es/contact', lang: 'es', priority: '0.9' },
    
    { url: '/en/', lang: 'en', priority: '1.0' },
    { url: '/en/rooms', lang: 'en', priority: '0.9' },
    { url: '/en/cuisine', lang: 'en', priority: '0.9' },
    { url: '/en/activities', lang: 'en', priority: '0.9' },
    { url: '/en/contact', lang: 'en', priority: '0.9' },
    
    { url: '/ca/', lang: 'ca', priority: '1.0' },
    { url: '/ca/rooms', lang: 'ca', priority: '0.9' },
    { url: '/ca/cuisine', lang: 'ca', priority: '0.9' },
    { url: '/ca/activities', lang: 'ca', priority: '0.9' },
    { url: '/ca/contact', lang: 'ca', priority: '0.9' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => `  <url>
    <loc>https://caltrucafort.com${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="${page.lang}" href="https://caltrucafort.com${page.url}" />
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};
