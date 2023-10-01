import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeReact from 'rehype-react'
import * as prod from 'react/jsx-runtime'
import * as T from '@/types'

// @ts-expect-error
const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs }

export async function Content({ post }: { post: T.Post }) {
  const content = await unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeSlug)
    .use(rehypeHighlight, { detect: true })
    .use(rehypeAutolinkHeadings)
    .use(rehypeReact, production)
    .process(post.rendered_body)

  return <div className='prose dark:prose-invert'>{content.result}</div>
}
