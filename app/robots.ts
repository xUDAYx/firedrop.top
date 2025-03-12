import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://firedrop.top"
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/about',
          '/contact',
          '/privacy',
          '/terms',
          '/project-idea-generator',
          '/project-idea-generator/ai-ml',
          '/project-idea-generator/data-science',
          '/project-idea-generator/cybersecurity',
          '/project-idea-generator/web-development'
        ],
        disallow: [
          '/dashboard',
          '/api',
          '/admin',
          '/_next',
          '/*.json$'
        ]
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  }
}