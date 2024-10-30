// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://www.denovosecurity.com', // Replace with your website's URL
    generateRobotsTxt: true, // Automatically generate a robots.txt file
    sitemapSize: 7000, // Limit for the number of URLs in each sitemap
    changefreq: 'weekly',
    priority: 0.7,
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        // Add more specific rules here if needed
      ],
      additionalSitemaps: [
        'https://www.denovosecurity.com/sitemap.xml', // Add more sitemaps if needed
      ],
    },
  };
  