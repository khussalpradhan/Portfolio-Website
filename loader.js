
export default function myImageLoader({ src, width, quality }) {
  return `https://satyampriyam.netlify.app/${src}?w=${width}&q=${quality || 75}`
}
