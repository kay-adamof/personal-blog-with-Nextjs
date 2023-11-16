import { unified } from 'unified'
import * as rehype from '@/lib/rehypeWrapper'
import { toc } from '@jsdevtools/rehype-toc'
import * as T from '@/types'
import * as C from '@/constants'
import * as prod from 'react/jsx-runtime'

// @ts-expect-error: the react types are missing.
const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs }

let others: object = {}
const { normal: normalNames } = C.markdownNames
normalNames.forEach(v => {
  others = { ...others, [v]: () => { } }
})

export const Toc = async ({
  children,
  post,
}: {
  children: React.ReactNode
  post: T.Post
}) => {
  const file = await unified()
    .use(rehype.parse)
    .use(rehype.slug)
    .use(toc, {
      headings: ['h1', 'h2'],
    })
    .use(rehype.stringify)
    .process(post.rendered_body)

  // @ts-expect-error
  const navElement = file.value.match(/<nav[\s\S]*nav>/)[0] as string

  const navContent = (
    await unified()
      .use(rehype.parse, { fragment: true })
      .use(rehype.react, production)
      .process(navElement)
  ).result

  return (
    <nav
      aria-label='table of contents'
      className='prose z-50 dark:prose-invert dark:bg-black '
    >
      {children}
      {navContent}
    </nav>
  )
}
