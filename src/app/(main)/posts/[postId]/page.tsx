import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPost } from '@/app/_lib/getPost'
import { IPost } from '@/qiita.schema.types'
import React from 'react'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/night-owl.css'
import Toc from '@/app/_components/Toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import ScrollToTop from '../../_components/client/ScrollToTop'

type Props = {
  params: {
    postId: string
  }
}

export default async function Post({ params: { postId } }: Props) {
  const post: IPost = await getPost(postId)

  return (
    <main className='mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between p-24'>
      <article className='prose dark:prose-invert '>
        <h1>{post.title}</h1>
        <MDXRemote
          source={post.body}
          options={{
            mdxOptions: {
              remarkPlugins: [],
              rehypePlugins: [
                rehypeHighlight,
                rehypeSlug,
                [rehypeAutolinkHeadings, { behaviors: 'wrap' }],
              ],
            },
          }}
        />
      </article>
      <ScrollToTop>{'Go to Top'}</ScrollToTop>
    </main>
  )
}
