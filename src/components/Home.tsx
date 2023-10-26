import remarkEmbedder, {
  TransformerInfo,
  Transformer,
} from '@remark-embedder/core'
import remarkEmbedderTransformerOembed from '@remark-embedder/transformer-oembed'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/night-owl.css'
import { Qiita } from '@/types'
import { CustomMDX } from '@/components/CustomMdx'
import langDockerfile from 'highlight.js/lib/languages/dockerfile'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import type { Config } from '@remark-embedder/transformer-oembed'
import * as c from '@/constants'
import * as l from '@/lib'
import * as config from '@/config'

function handleHTML(html: string, info: TransformerInfo) {
  const { url, transformer } = info
  const twitter = `${html}`

  if (transformer.name === '@remark-embedder/transformer-oembed') {
    if (url.includes('youtube.com')) return `${html}`
    if (url.includes('twitter.com')) return twitter
  }
  return html
}

export const Home = async({ post }: { post: Qiita.Post })=>  {
  const regex = c.regex
  const contentAfterReplaced = l.contentAfterReplaced(post,regex)
  return (
    <article className='prose pt-10 mx-auto dark:prose-invert prose-h1:text-[28px]'>
      <h1>{post.title}</h1>
      <CustomMDX
        source={contentAfterReplaced}
        options={{
          mdxOptions: {
            remarkPlugins: [
              // [remark.gfm],
              [
                remarkEmbedder,
                {
                  transformers: [
                    [remarkEmbedderTransformerOembed, config.oembed],
                  ],
                  handleHTML,
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
