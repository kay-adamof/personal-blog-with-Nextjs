import { MDXRemote } from 'next-mdx-remote/rsc'
import React, { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react'
import { Code } from '@/components/Code'
import getOembedProvidersUrls from '@/lib/getOembedProvidersUrls'
import isUrl from '@/lib/isUrl'
import urlMetadata from 'url-metadata'
import Image from 'next/image'
import { KeyOfMetadata } from '@/types/KeyOfMetadata'

const getMeta =
  (metaData: Awaited<ReturnType<typeof urlMetadata>>) =>
    (str: KeyOfMetadata) => {
      const data = metaData[str]
      return typeof data === 'string' ? data : ''
    }

const BookmarkCard = (meta: (str: KeyOfMetadata) => string): JSX.Element => (
  <>
    <div className='card md:card-side'>
      <div className='card-body'>
        <h2 className='card-title'>{meta('og:title')}</h2>
        <p>{meta('og:description')}</p>
      </div>
      <figure className='invisible md:visible'>
        <Image
          src={meta('og:image')}
          width={1200}
          height={630}
          alt=''
        />
      </figure>
    </div>
  </>
)

const DefaultAnchor = (
  props: AnchorHTMLAttributes<HTMLAnchorElement>,
): JSX.Element => <a {...props} />

const Anchor = async (
  props: AnchorHTMLAttributes<HTMLAnchorElement>,
): Promise<JSX.Element | string> => {
  if (!props.href) return DefaultAnchor(props)

  if (!isUrl(props.href)) return DefaultAnchor(props)

  const url = new URL(props.href)
  const oembedProviderUrls = await getOembedProvidersUrls()
  const hasUrlOfOembedProvider = (urls: string[]) => {
    return urls
      .map(providerUrl => providerUrl.includes(url.hostname))
      .some(v => v === true)
  }

  if (hasUrlOfOembedProvider(oembedProviderUrls)) return DefaultAnchor(props)

  try {
    const metaData = await urlMetadata(url.toString())
    const meta = getMeta(metaData)

    return BookmarkCard(meta)
  } catch (error) {
    return DefaultAnchor(props)
  }
}

const components = {
  code: Code,
  a: Anchor,
  p: (props: HTMLAttributes<'div'>) => (
    <div className='my-5'>{props.children}</div>
  ),
}

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}