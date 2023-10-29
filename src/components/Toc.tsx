import { unified } from 'unified'
import * as rehype from '@/lib/rehypeWrapper'
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
    .use(rehype.parse)
    .use(rehype.slug)
    // @ts-expect-error
    .use(toc, {
      headings: ['h1', 'h2'],
    })
    .use(rehype.stringify)
    .process(post.rendered_body)

  // @ts-expect-error
  const navElement = file.value.match(/<nav[\s\S]*nav>/)[0]

  const navContent = await unified()
    .use(rehype.parse, { fragment: true })
    .use(rehype.react, production)
    .process(navElement)

  return (
    <div>
      {children}
      {navContent.result}
    </div>
  )
}
