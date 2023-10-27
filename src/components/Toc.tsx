import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeSlug from 'rehype-slug'
import rehypeReact from 'rehype-react'
import rehypeStringify from 'rehype-stringify'
import { toc } from '@jsdevtools/rehype-toc'
import { Post } from '@/types/qiita.schema.types'
import * as prod from 'react/jsx-runtime'

// @ts-expect-error: the react types are missing.
const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs }

export const Toc = async ({
  children,
  post,
}: {
  children: React.ReactNode
  post: Post
}) => {
  const file = await unified()
    .use(rehypeParse)
    .use(rehypeSlug)
    // @ts-expect-error
    .use(toc, {
      headings: ['h1', 'h2'],
    })
    .use(rehypeStringify)
    .process(post.rendered_body)

  // @ts-expect-error
  const navElement = file.value.match(/<nav[\s\S]*nav>/)[0]

  const navContent = await unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeReact, production)
    .process(navElement)

  return (
    <div>
      {children}
      {navContent.result}
    </div>
  )
}
