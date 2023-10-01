import * as T from '@/types'
import * as s from './'
import { rehype } from '@/lib'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
// import remarkEmbedder from '@remark-embedder/core'
import remarkEmbedder from '../../../refs/core/dist/index'
import oembedTransformer from '@remark-embedder/transformer-oembed'
import type { Config } from '@remark-embedder/transformer-oembed'
import remarkGfm from 'remark-gfm'

export function Article({ post }: { post: T.Post }) {
  console.log(post.body)

  return (
    <div>
      <article className=''>
        <h1>{post.title}</h1>
        <MDXRemote
          source={post.body}
          options={{
            mdxOptions: {
              remarkPlugins: [
                remarkGfm,
                [
                  remarkEmbedder,
                  {
                    transformers: [oembedTransformer],
                  },
                ],
              ],
              rehypePlugins: [
                rehype.highlight,
                rehype.slug,
                [rehypeAutolinkHeadings, { behaviors: 'wrap' }],
              ],
            },
          }}
        />
      </article>
    </div>
  )
}
