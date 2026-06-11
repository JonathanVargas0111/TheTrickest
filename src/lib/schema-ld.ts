import { SITE_URL } from '@/lib/site';

// Schema JSON-LD for TRICKEST
// Helps Google understand the site structure.
// Domain comes from a single source of truth (SITE_URL) so it stays in
// sync with the sitemap, robots and metadata.
export function generateSchemaLd() {
  const baseUrl = SITE_URL;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: `${baseUrl}/`,
        name: 'TRICKEST',
        description: 'TRICKEST - Skateboard Challenge Platform. Submit trick videos, get scored by judges, compete in global leaderboards.',
        inLanguage: 'en',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${baseUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebApplication',
        '@id': `${baseUrl}/#webapp`,
        name: 'TRICKEST - Skateboard Challenge Platform',
        url: `${baseUrl}/`,
        description: 'Online skateboarding challenge platform where skaters can submit trick videos, receive scores from judges, and compete on global leaderboards.',
        applicationCategory: 'SportsApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        },
        featureList: [
          'Video trick submissions',
          'Judge scoring system',
          'Global leaderboards',
          'Team competitions',
          'Challenge levels',
          'Real-time rankings'
        ],
        aggregator: {
          '@type': 'Organization',
          name: 'TRICKEST',
          url: baseUrl
        }
      },
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: 'TRICKEST',
        url: `${baseUrl}/`,
        logo: `${baseUrl}/logo-main.png`,
        description: 'TRICKEST is a skateboard challenge platform connecting skaters worldwide through competitive video submissions and judge scoring.',
        sameAs: [
          // Add your social media URLs when available
          // 'https://instagram.com/trickest',
          // 'https://twitter.com/trickest',
          // 'https://youtube.com/@trickest'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: 'privacy@trickest.com'
        }
      },
      {
        '@type': 'SportsActivityLocation',
        '@id': `${baseUrl}/#sportsactivity`,
        name: 'TRICKEST Skateboard Challenges',
        description: 'Online skateboard challenge platform with video submissions and judge scoring',
        sport: 'Skateboarding',
        url: `${baseUrl}/`,
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'US'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${baseUrl}/`
          }
        ]
      }
    ]
  };

  return schema;
}
