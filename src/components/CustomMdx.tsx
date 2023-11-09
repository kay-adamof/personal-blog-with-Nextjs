import { MDXRemote } from 'next-mdx-remote/rsc'
import React, { AnchorHTMLAttributes, HTMLAttributes } from 'react'
import * as S from '@server_components'
import * as T from '@/types'
import { Tweet } from 'react-tweet'

const components = {
  CardStyleLink: S.CardStyleLink,
  Tweet: Tweet,
  code: S.Code,
  p: (props: HTMLAttributes<'div'>) => (
    <div className='my-5'>{props.children}</div>
  ),
} satisfies { [k in T.ComponentName]?: any }

export const CustomMDX = (props: any) => {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
