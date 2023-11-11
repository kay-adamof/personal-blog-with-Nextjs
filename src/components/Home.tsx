import * as rehype from '@/lib/rehypeWrapper'
import * as remark from '@/lib/remarkWrapper'
import * as L from '@/lib'
import * as S from '@server_components'
import * as T from '@/types'
import 'highlight.js/styles/night-owl.css'
import langDockerfile from 'highlight.js/lib/languages/dockerfile'
import { oembed } from '@/config/oembed'

const options = {
  remark: [
    [
      remark.embedder,
      {
        transformers: [[ remark.transformer ,oembed]],
      },
    ],
  ],

  rehype: [
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
}

export const Home = async ({ post }: { post: T.Post }) => {

  const content = await L.contentAfterReplaced({ post: post })

  return (
    <article className='prose mx-auto pt-10 dark:prose-invert prose-h1:text-[28px]'>
      <h1>{post.title}</h1>
      <S.CustomMDX
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: options.remark,
            rehypePlugins: options.rehype,
          },
        }}
      />
    </article>
  )
}
