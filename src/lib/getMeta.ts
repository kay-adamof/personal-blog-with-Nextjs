import * as T from '@/types'

export const getMeta =
  (metaData: T.UrlMetadataResult) =>
    (str: T.KeyOfMetadata) => {
      const data = metaData[str]
      return typeof data === 'string' ? data : ''
    }

