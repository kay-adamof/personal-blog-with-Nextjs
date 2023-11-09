import * as L from '@/lib'
import urlMetadata from 'url-metadata'


export const makeCardStyleLink = async (props: {
  urlStr: string
  providers: string[]
}) => {
  const url = new URL(props.urlStr)

  if (!L.hasUrlOfOembedProvider(url, props.providers)) {
    const urlMetadataResult = await urlMetadata(url.toString())
    const data = L.getMeta(urlMetadataResult)
    return `<${L.makeComponent('CardStyleLink',data)} />`
  }

  return props.urlStr
}
