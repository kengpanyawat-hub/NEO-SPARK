const fs = require('fs'); const path = require('path');
const base = process.env.SITE_URL || 'https://neo-spark.agency';
const routes = ['/', '/services', '/works', '/courses', '/blog', '/contact'];
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r=>`<url><loc>${base}${r}</loc></url>`).join('\n')}
</urlset>`;
fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), xml);
console.log('sitemap generated');
