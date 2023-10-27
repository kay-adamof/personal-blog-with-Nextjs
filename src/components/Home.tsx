import remarkEmbedder, { TransformerInfo } from '@remark-embedder/core'
import remarkEmbedderTransformerOembed from '@remark-embedder/transformer-oembed'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/night-owl.css'
import { Post } from '@/types/qiita.schema.types'
import { CustomMDX } from '@/components/CustomMdx'
import langDockerfile from 'highlight.js/lib/languages/dockerfile'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { regex } from '@/constants/regex'
import { contentAfterReplaced } from '@/lib/contentAfterReplaced'
import { handleHTML } from '@/lib/handleHTML'
import { oembed } from '@/config/oembed'

export const Home = ({ post }: { post: Post }) => {
  const content = contentAfterReplaced(post, regex)
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
                    [remarkEmbedderTransformerOembed, oembed],
                  ],
                  handleHTML: handleHTML,
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
