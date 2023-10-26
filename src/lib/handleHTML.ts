import { TransformerInfo } from '@remark-embedder/core'

export function handleHTML(html: string, info: TransformerInfo) {
  const { url, transformer } = info
  const twitter = `${html}`

  if (transformer.name === '@remark-embedder/transformer-oembed') {
    if (url.includes('youtube.com')) return `${html}`
    if (url.includes('twitter.com')) return twitter
  }
  return html
}
