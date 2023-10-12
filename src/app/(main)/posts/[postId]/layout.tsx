import Script from 'next/script'
import type { Metadata } from 'next'
import { twitterWidgets } from '@/constants/scriptSrc'

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
      <Script src={twitterWidgets} />
    </>
  )
}
