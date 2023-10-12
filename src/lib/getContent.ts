// import * as UF from 'unified'
// import * as rehype from './rehypeWrapper'
// import * as T from '@/types'
//
// export async function getContent({ post }: { post: IPost }) {
//   const content = await UF.unified()
//     .use(rehype.parse.default, { fragment: true })
//     .use(rehype.slug.default)
//     .use(rehype.highlight.default, { detect: true })
//     .use(rehype.autolinkHeadings.default)
//     .use(rehype.react.default,T.production)
//     .process(post.rendered_body)
//
//   return content
// }
//
