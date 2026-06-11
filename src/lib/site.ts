/**
 * Single source of truth for the site's canonical origin.
 *
 * Set NEXT_PUBLIC_APP_URL in the environment (Vercel) to override.
 * Falls back to the production domain — NOT localhost — so SEO output
 * (sitemap, robots, canonical, JSON-LD) never leaks a localhost URL to
 * crawlers when the env var is missing in a deployment.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_APP_URL || 'https://trickest.vercel.app'
).replace(/\/$/, '');

export const LOCALES = ['en', 'es'] as const;
