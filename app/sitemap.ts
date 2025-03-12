import { MetadataRoute } from 'next'

type ChangeFreq = "daily" | "weekly" | "monthly" | "always" | "hourly" | "yearly" | "never"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://firedrop.top"
  
  // Project generator domains
  const projectDomains = [
    'ai-ml',
    'data-science',
    'cybersecurity',
    'web-development'
  ] as const

  // Generate project generator URLs
  const projectGeneratorUrls: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/project-idea-generator`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as ChangeFreq,
      priority: 0.9
    },
    ...projectDomains.map(domain => ({
      url: `${baseUrl}/project-idea-generator/${domain}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as ChangeFreq,
      priority: 0.8
    }))
  ]

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as ChangeFreq,
      priority: 1
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as ChangeFreq,
      priority: 0.8
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as ChangeFreq,
      priority: 0.8
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as ChangeFreq,
      priority: 0.5
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as ChangeFreq,
      priority: 0.5
    }
  ]

  return [...projectGeneratorUrls, ...staticPages]
}
