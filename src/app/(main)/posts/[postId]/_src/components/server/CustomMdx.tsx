import { MDXRemote } from 'next-mdx-remote/rsc'
import React, { AnchorHTMLAttributes, ReactNode } from 'react'
import { Code } from './Code'
import * as lib from '../../lib'

// ---------------
import urlMetadata from 'url-metadata'
import Image from 'next/image'


const Anchor = async (
  props: AnchorHTMLAttributes<HTMLAnchorElement>,
): Promise<JSX.Element> => {
  const href = props.href

  let metaImage: urlMetadata.Result[string] = ''

  if (href) {
    if (lib.isUrl(href)) {
      const url = new URL(href)
      const oembedProviderUrls = await lib.getOembedProviderUrls()
      const hasUrlOfOembedProvider = (urls: string[]) => {
        return urls
          .map(providerUrl => providerUrl.includes(url.hostname))
          .some(v => v === true)
      }
      if (!hasUrlOfOembedProvider(oembedProviderUrls)) {
        try {
          const metaData = await urlMetadata(url.toString())

          if (typeof metaData['og:image'] === 'string') {
            metaImage = metaData['og:image']
          }
        } catch (error) { }
      }
    }
  }

  const Card: ReactNode = (
    <>
      <div className=''>
        <span>Test</span>

        <Image
          src={metaImage}
          width={500}
          height={500}
          alt='Picture of the author'
        />
      </div>
    </>
  )
  return (
    <>
      <a {...props}>
        {metaImage ? (
          <Image
            src={metaImage}
            width={500}
            height={500}
            alt='Picture of the author'
          />
        ) : (
          props.children
        )}
      </a>
    </>
  )
}

const components = {
  code: Code,
  a: Anchor,
  p: (props: HTMLAttributes<HTMLDivElement>) => (
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
