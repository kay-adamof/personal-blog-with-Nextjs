import { MDXRemote } from 'next-mdx-remote/rsc'
import React, { AnchorHTMLAttributes, HTMLAttributes } from 'react'
import { Code } from './Code'
import * as lib from '../../lib'
import urlMetadata from 'url-metadata'
import Image from 'next/image'
import { keyofMetadata } from '../../constants'

const getMeta =
  (metaData: Awaited<ReturnType<typeof urlMetadata>>) =>
    (str: keyofMetadata) => {
      const data = metaData[str]
      return typeof data === 'string' ? data : ''
    }

const Anchor = async (
  props: AnchorHTMLAttributes<HTMLAnchorElement>,
): Promise<JSX.Element | string> => {
  const defaultAnchor: JSX.Element = <a {...props} />

  if (!props.href) return defaultAnchor

  if (!lib.isUrl(props.href)) return defaultAnchor

  const url = new URL(props.href)
  const oembedProviderUrls = await lib.getOembedProviderUrls()
  const hasUrlOfOembedProvider = (urls: string[]) => {
    return urls
      .map(providerUrl => providerUrl.includes(url.hostname))
      .some(v => v === true)
  }

  if (hasUrlOfOembedProvider(oembedProviderUrls)) return defaultAnchor

  try {
    const metaData = await urlMetadata(url.toString())
    const meta = getMeta(metaData)

    return (
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
  } catch (error) {
    return defaultAnchor
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
