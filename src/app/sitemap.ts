import { MetadataRoute } from 'next'
import { SITE_URL, LOCALES } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL

  // Public, indexable routes only. Private areas (dashboard, admin, auth)
  // are intentionally excluded and also blocked in robots.ts.
  const routes = ['', 'about', 'contacto', 'spots', 'explore', 'testimonials', 'services', 'portfolio']

  const sitemapEntries: MetadataRoute.Sitemap = []

  LOCALES.forEach(locale => {
    routes.forEach(route => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route ? '/' + route : ''}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })

  return sitemapEntries
}
