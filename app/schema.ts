import { baseUrl } from '@/config/site'

export default function generateSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        'url': baseUrl,
        'name': 'Firedrop',
        'description': 'Professional Academic Projects and Project Ideas Generator',
        'publisher': {
          '@type': 'Organization',
          'name': 'Firedrop',
          'logo': {
            '@type': 'ImageObject',
            'url': `${baseUrl}/logo.png`
          }
        }
      },
      {
        '@type': 'WebPage',
        '@id': `${baseUrl}/#webpage`,
        'url': baseUrl,
        'name': 'Firedrop - Professional Academic Projects',
        'isPartOf': { '@id': `${baseUrl}/#website` },
        'primaryImageOfPage': {
          '@type': 'ImageObject',
          'url': `${baseUrl}/og.png`
        },
        'datePublished': '2024-01-01T00:00:00+00:00',
        'dateModified': new Date().toISOString()
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${baseUrl}/project-idea-generator/#software`,
        'name': 'Project Ideas Generator',
        'url': `${baseUrl}/project-idea-generator`,
        'applicationCategory': 'EducationalApplication',
        'operatingSystem': 'Web',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/#breadcrumb`,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'item': {
              '@id': baseUrl,
              'name': 'Home'
            }
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'item': {
              '@id': `${baseUrl}/project-idea-generator`,
              'name': 'Project Generator'
            }
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'item': {
              '@id': `${baseUrl}/about`,
              'name': 'About'
            }
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'item': {
              '@id': `${baseUrl}/contact`,
              'name': 'Contact'
            }
          }
        ]
      }
    ]
  }
} 