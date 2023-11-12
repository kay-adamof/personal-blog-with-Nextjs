import { MDXRemote } from 'next-mdx-remote/rsc'
import React, { HTMLAttributes } from 'react'
import * as S from '@server_components'
import * as T from '@/types'

const components = {
  CardSkeleton: S.CardSkeleton,
  CardStyleLink: S.CardStyleLink,
  Suspense: React.Suspense,
  Tweet: S.MyTweet,
  code: S.Code,
  iframe: (props: HTMLAttributes<HTMLIFrameElement>) => {
    return <iframe loading='lazy' {...props}>{props.children}</iframe>
  },
} satisfies { [k in T.ComponentName]?: any }

export const CustomMDX = (props: any) => {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
