import { ImageProps } from 'next/image'

export interface MetadataForCard {
  imageSrc: ImageProps['src']
  title: string
  description: string
}

