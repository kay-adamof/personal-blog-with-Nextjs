import { remark } from '@/lib'
import { rehype } from '@/lib'
import 'highlight.js/styles/night-owl.css'
import * as T from '@/types'
import { CustomMDX } from './CustomMdx'

export const Home = async ({ post }: { post: T.Post }) => {
  return (
    <article className='prose dark:prose-invert'>
      <h1>{post.title}</h1>
      <CustomMDX
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
