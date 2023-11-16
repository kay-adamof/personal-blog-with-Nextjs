export type { MyTheme } from './MyTheme'
export type { LocalStorageTheme } from './LocalStorageTheme'
export type { RegexForReplacingContent } from '@/constants/regex'
export type { KeyOfMetadata } from './KeyOfMetadata'
export type { Post } from './qiita.schema.types'
export type { ComponentName } from './ComponentNames'
export type { UrlMetadata } from './UrlMetadata'
export type { MetadataForCard } from './MetadataForCard'

import urlMetadata from 'url-metadata'
export type UrlMetadataResult = urlMetadata.Result

export type replacerParams = Parameters< Parameters< typeof String.prototype.replace >[1] >

export type { DefaultIconSize } from '@/components/icons'

export type { getMetadataArray } from '@/lib'

export type { DrawerId } from '@/components/DrawerState'


