import * as L from '@/lib'
import urlMetadata from 'url-metadata'

export const getMetadataArray = async (urlStrings: (string | false)[]) => {
    const promises = urlStrings.map(
      urlStr => urlStr && urlMetadata(urlStr, { cache: 'force-cache' }),
    )
    const [...urlMetadataResults] = await Promise.all(promises)
    return urlMetadataResults.map(result => (result ? L.getMeta(result) : false))
}

export type getMetadataArray = typeof getMetadataArray
