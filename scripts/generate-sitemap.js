import { writeFileSync, readdirSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const baseUrl = 'https://charlesdoucet.com';
const buildDir = './dist';

// Static routes configuration
const staticRoutes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' },
  { path: '/logs', priority: 0.9, changefreq: 'weekly' }
  // Add new static pages here when needed:
  // { path: '/portfolio', priority: 0.8, changefreq: 'monthly' },
  // { path: '/services', priority: 0.7, changefreq: 'monthly' }
];

function getLogArticleRoutes() {
  try {
    const articlesDir = join(__dirname, '../src/content/logs/articles');
    const routes = [];
    
    try {
      const articleFolders = readdirSync(articlesDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

      for (const folder of articleFolders) {
        try {
          const indexPath = join(articlesDir, folder, 'index.ts');
          const content = readFileSync(indexPath, 'utf8');
          
          // Simple regex to extract metadata
          const idMatch = content.match(/id:\s*['"`]([^'"`]+)['"`]/);
          const dateMatch = content.match(/date:\s*['"`]([^'"`]+)['"`]/);
          const publishedMatch = content.match(/published:\s*(true|false)/);
          
          if (idMatch && publishedMatch && publishedMatch[1] === 'true') {
            routes.push({
              path: `/logs/${idMatch[1]}`,
              priority: 0.7,
              changefreq: 'monthly',
              lastmod: dateMatch ? dateMatch[1] : null
            });
          }
        } catch (error) {
          console.warn(`Could not process article in folder ${folder}:`, error.message);
        }
      }
    } catch (error) {
      console.warn('Could not read articles directory:', error.message);
    }

    return routes;
  } catch (error) {
    console.warn('Could not load log articles:', error.message);
    return [];
  }
}

function generateSitemap() {
  try {
    console.log('🚀 Starting sitemap generation...');
    
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Get all routes
    console.log('🔍 Discovering routes...');
    const logRoutes = getLogArticleRoutes();
    const allRoutes = [...staticRoutes, ...logRoutes];
    
    // Convert routes to sitemap entries
    const entries = allRoutes.map(route => ({
      url: `${baseUrl}${route.path}`,
      lastmod: route.lastmod || currentDate,
      changefreq: route.changefreq,
      priority: route.priority
    }));

    // Generate XML sitemap
    const urlEntries = entries.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
    
    // Generate robots.txt
    const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Block access to source maps and other development files
Disallow: /*.map$
Disallow: /src/
Disallow: /node_modules/
`;
    
    // Write files
    const sitemapPath = join(buildDir, 'sitemap.xml');
    const robotsPath = join(buildDir, 'robots.txt');
    
    writeFileSync(sitemapPath, sitemap);
    writeFileSync(robotsPath, robotsTxt);

    console.log(`✅ Sitemap generated successfully!`);
    console.log(`📁 Files created:`);
    console.log(`   - ${sitemapPath} (${entries.length} URLs)`);
    console.log(`   - ${robotsPath}`);
    
    // Log discovered routes for verification
    console.log('\n📋 Discovered routes:');
    allRoutes.forEach(route => {
      console.log(`   ${route.path} (priority: ${route.priority})`);
    });
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the generator
generateSitemap();