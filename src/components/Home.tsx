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

function handleHTML(html: string, info: TransformerInfo) {
  const { url, transformer } = info
  const twitter = `${html}`

  if (transformer.name === '@remark-embedder/transformer-oembed') {
    if (url.includes('youtube.com')) return `${html}`
    if (url.includes('twitter.com')) return twitter
  }
  return html
}

export default async ({ post }: { post: Qiita.Post }) => {
  const regex = {
    urlBase:
      '\\https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)',
    url: /\https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/g,
    link: () =>
      new RegExp(`\\n\\[(${regex.urlBase})\\]\\(${regex.urlBase}\\)`, 'g'),
    Url: /\n(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*))/g,
    Xcom: /https:\/\/x\.com/g,
    Twitter:
      /(\[https:\/\/twitter\.com\/)([A-Za-z0-9_]+)(\/status\/[0-9]+\?s=[0-9]+\])/g,
  }

  const contentAfterReplaced = post.body
    .replace(regex.Url, '\n[$1]($1)') // Make url markdown sytle
    .replace(regex.Xcom, 'https://twitter.com') // Let the twitter widget.js recognize url
    .replace(
      regex.Twitter,
      (_, $1, $2, $3) => $1 + $2.replace(/_/g, '\\_') + $3,
    ) // To avoid the parser recognizes the word surrounded by underscore as italic

  const oembedConfig: Config = ({ url, provider }) => {
    if (provider.provider_name === 'YouTube') {
      const w = 640
      const h = (w * 9) / 16
      return { params: { maxwidth: w.toString(), maxheight: h.toString() } }
    }
    if (provider.provider_name === 'Twitter') {
      return { params: { theme: 'light', hide_thread:true, dnt: true, omit_script: true } }
    }
    return {
      params: {},
    }
  }
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
                    [remarkEmbedderTransformerOembed, oembedConfig],
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
