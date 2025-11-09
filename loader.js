
export default function myImageLoader({ src, width, quality }) {
  // If we're in development or the src is a local path (starts with '/'),
  // return the src directly so Next serves it from /public/ instead of
  // rewriting to the external host. This fixes broken images during local dev.
  if (process.env.NODE_ENV === "development" || src?.startsWith("/")) {
    return src;
  }

  // Production: allow an environment-configured image host. Set IMAGE_HOST to
  // something like 'https://your-host.example' (no trailing slash) in production.
  // If IMAGE_HOST is not set, fall back to returning the original src.
  const path = src.startsWith("/") ? src : `/${src}`;
  const host = process.env.IMAGE_HOST;
  if (host) {
    return `${host}${path}?w=${width}&q=${quality || 75}`;
  }

  // No IMAGE_HOST configured — return src (serve from public or absolute URL).
  return src;
}
