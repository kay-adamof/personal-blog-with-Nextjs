import { unified } from 'unified'
import * as rehype from '@/lib/rehypeWrapper'
import { toc } from '@jsdevtools/rehype-toc'
import * as T from '@/types'
import * as C from '@/constants'
import * as U from '@/utils'
import * as S from '@server_components'
import * as R from 'react'
import * as prod from 'react/jsx-runtime'
import { MDXRemote } from 'next-mdx-remote/rsc'

// @ts-expect-error: the react types are missing.
const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs }

let others: object = {}
const { normal: normalNames } = C.markdownNames
normalNames.forEach(v => {
  others = { ...others, [v]: () => { } }
})

export const Toc2 = ({
  children,
  post,
}: {
  children: React.ReactNode
  post: T.Post
}) => {
  return (
    <MDXRemote
      components={{
        nav: (props: R.HTMLAttributes<HTMLElement>) => {
          if (props.className === 'toc') {
            return <nav {...props}>{props.children}</nav>
          }
          return <nav {...props}>{props.children}</nav>
        },
        ...others,
      }}
      source={post.body}
      options={{
        mdxOptions: {
          rehypePlugins: [
            rehype.slug,
            [rehype.autolinkHeadings, { behaviors: 'wrap' }],
            rehype.toc,
          ],
        },
      }}
    />
  )
}

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

  // const replacedNav = navElement.replace(/<a.*a>/g,(_,$1)=>{})






// const rgx = /(<a.*>\n.*a>)/g
// let replaced = navElement.replace(rgx, (_, $1) => {
//
//   return `<label htmlFor='my-drawer'>${$1}</label>`
//   })



  const navContent = (
    await unified()
      .use(rehype.parse, { fragment: true })
      .use(rehype.react, production)
      .process(navElement)
  ).result






  // const content = (obj: object) =>
  //   Object.entries(obj).map(([key, value]) => {
  //     if(typeof value === 'object' && value !== null){
  //       content(value)
  //     } else{
  //       if(value === '')
  //     }
  //   })
  // content(navContent)

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


