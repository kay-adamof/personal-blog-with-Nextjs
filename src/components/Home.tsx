import remarkEmbedder, { TransformerInfo } from '@remark-embedder/core'
import remarkEmbedderTransformerOembed from '@remark-embedder/transformer-oembed'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/night-owl.css'
import { Qiita } from '@/types'
import { CustomMDX } from '@/components/CustomMdx'
import langDockerfile from 'highlight.js/lib/languages/dockerfile'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import * as c from '@/constants'
import * as l from '@/lib'
import * as config from '@/config'

export const Home = async ({ post }: { post: Qiita.Post }) => {
  const content = l.contentAfterReplaced(post, c.regex)
  return (
    <article className='prose mx-auto pt-10 dark:prose-invert prose-h1:text-[28px]'>
      <h1>{post.title}</h1>
      <CustomMDX
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [
              [
                remarkEmbedder,
                {
                  transformers: [
                    [remarkEmbedderTransformerOembed, config.oembed],
                  ],
                  handleHTML:l.handleHTML,
                },
              ],
            ],
            rehypePlugins: [
              [
                rehypeHighlight,
                {
                  ignoreMissing: true,
                  languages: {
                    dockerfile: langDockerfile,
                  },
                  aliases: { dockerfile: 'docker', docker: 'dockerfile' },
                },
              ],
              rehypeSlug,
              [rehypeAutolinkHeadings, { behaviors: 'wrap' }],
            ],
          },
        }}
      />
    </article>
  )
}
