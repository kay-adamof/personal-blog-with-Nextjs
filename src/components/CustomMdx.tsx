import { MDXRemote } from 'next-mdx-remote/rsc'
import React, { AnchorHTMLAttributes, HTMLAttributes } from 'react'
import * as S from '@server_components'
import * as T from '@/types'

const components = {
  CardStyleLink: S.CardStyleLink,
  Tweet: S.MyTweet,
  code: S.Code,
} satisfies { [k in T.ComponentName]?: any }

export const CustomMDX = (props: any) => {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
