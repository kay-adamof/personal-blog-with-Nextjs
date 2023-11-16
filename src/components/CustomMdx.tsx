import { MDXRemote } from 'next-mdx-remote/rsc'
import * as R from 'react'
import * as S from '@server_components'
import * as T from '@/types'

const components = {
  CardSkeleton: S.CardSkeleton,
  CardStyleLink: S.CardStyleLink,
  Suspense: R.Suspense,
  Tweet: S.MyTweet,
  code: S.Code,
  h3: S.H3,
  h2: S.H2,
  iframe: S.IFrame
} satisfies { [k in T.ComponentName]?: any }

export const CustomMDX = (props: any) => {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
