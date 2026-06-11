import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Keep private / auth / API surfaces out of the index.
      // Paths are locale-prefixed (/en/..., /es/...), hence the /*/ wildcard.
      disallow: [
        '/api/',
        '/*/dashboard',
        '/*/admin',
        '/*/profile',
        '/*/signin',
        '/*/coming-soon',
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
