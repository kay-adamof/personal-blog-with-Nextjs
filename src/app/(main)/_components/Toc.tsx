import { IPost } from '@/qiita.schema.types'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import remarkToc from 'remark-toc'

const markdown = `
# Alpha

## Table of contents

## Bravo

### Charlie

Here is the profile of *Charlie

## Delta
`

export default function Toc({ post }: { post: IPost }) {
  return (
    <div>
      {/* {post.body.slice(0,100)} */}
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[]}
        rehypePlugins={[rehypeSlug]}
      />
    </div>
  )
}
