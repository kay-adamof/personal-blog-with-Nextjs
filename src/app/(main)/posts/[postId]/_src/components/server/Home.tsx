import { MDXRemote } from 'next-mdx-remote/rsc'
// import * as lib from '../lib'
// import * as CT from '../constants'
import { remark } from '@/lib'
import { rehype } from '@/lib'
// import type { Config } from '@remark-embedder/transformer-oembed'
import 'highlight.js/styles/night-owl.css'
import * as T from '@/types'

export const Home = async ({ post }: { post: T.Post }) => {

  return (
    <article className='prose dark:prose-invert'>
      <h1>{post.title}</h1>
      <MDXRemote
        source={post.body}
        options={{
          mdxOptions: {
            remarkPlugins: [
              [remark.gfm],
              [
                remark.embedder,
                {
                  transformers: [remark.embedderTransformer],
                },
              ],
            ],
            rehypePlugins: [
              rehype.highlight,
              rehype.slug,
              [rehype.headings, { behaviors: 'wrap' }],
            ],
          },
        }}
      />
    </article>
  )
}
