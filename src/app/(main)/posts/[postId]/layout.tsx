import Script from 'next/script'
import * as CT from '@/constants'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'next-mdx-remote experimental',
  description: 'How to create a page with next-mdx-remote',
}

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <Script src={CT.twitterWidgets} />
    </>
  )
}
