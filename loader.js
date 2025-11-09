
export default function myImageLoader({ src, width, quality }) {
  // If we're in development or the src is a local path (starts with '/'),
  // return the src directly so Next serves it from /public/ instead of
  // rewriting to the external host. This fixes broken images during local dev.
  if (process.env.NODE_ENV === "development" || src?.startsWith("/")) {
    return src;
  }

  const path = src.startsWith("/") ? src : `/${src}`;
  return `https://satyampriyam.netlify.app${path}?w=${width}&q=${quality || 75}`;
}
