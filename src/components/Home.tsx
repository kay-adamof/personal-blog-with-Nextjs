import * as rehype from '@/lib/rehypeWrapper'
import * as remark from '@/lib/remarkWrapper'
import * as lib from '@/lib'
import * as S from '@server_components'
import 'highlight.js/styles/night-owl.css'
import { Post } from '@/types/qiita.schema.types'
import langDockerfile from 'highlight.js/lib/languages/dockerfile'
import { regex } from '@/constants/regex'
import { oembed } from '@/config/oembed'

export const Home = ({ post }: { post: Post }) => {
  const content = lib.contentAfterReplaced(post, regex)
  return (
    <article className='prose mx-auto pt-10 dark:prose-invert prose-h1:text-[28px]'>
      <h1>{post.title}</h1>
      <S.CustomMDX
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [
              [
                remark.embedder,
                {
                  transformers: [
                    [remark.transformer, oembed],
                  ],
                  handleHTML: lib.handleHTML,
                },
              ],
            ],
            rehypePlugins: [
              [
                rehype.highlight,
                {
                  ignoreMissing: true,
                  languages: {
                    dockerfile: langDockerfile,
                  },
                  aliases: { dockerfile: 'docker', docker: 'dockerfile' },
                },
              ],
              rehype.slug,
              [rehype.autolinkHeadings, { behaviors: 'wrap' }],
            ],
          },
        }}
      />
    </article>
  )
}
