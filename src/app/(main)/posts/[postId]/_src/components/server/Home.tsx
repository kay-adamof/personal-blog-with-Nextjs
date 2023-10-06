import { remark } from '@/lib'
import { rehype } from '@/lib'
import 'highlight.js/styles/night-owl.css'
import * as T from '@/types'
import { CustomMDX } from './CustomMdx'
import fs from 'fs/promises'
import path from 'path'

const filePath = () => {
  const fileToStorePath = path.join(
    process.cwd(),
    'src/app/(main)/posts/[postId]/_src/components/server/article.md',
  )
  return fileToStorePath
}

export const Home = async ({ post }: { post: T.Post }) => {
  const markdownFilePath = filePath()
  const markdownContent = await fs.readFile(markdownFilePath, 'utf8')

  const regex = {
    Url: /\n(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*))/g,
    Xcom: /https:\/\/x\.com/g,
    Twitter:
      /(\[https:\/\/twitter\.com\/)([A-Za-z0-9_]+)(\/status\/[0-9]+\?s=[0-9]+\])/g,
  }

  const contentAfterReplaced = markdownContent
    .replace(regex.Url, '\n[$1]($1)')
    .replace(regex.Xcom, 'https://twitter.com')
    .replace(
      regex.Twitter,
      (_, $1, $2, $3) => $1 + $2.replace(/_/g, '\\_') + $3,
    )

  return (
    <article className='prose dark:prose-invert'>
      <h1>{post.title}</h1>
      <CustomMDX
        source={contentAfterReplaced}
        options={{
          mdxOptions: {
            remarkPlugins: [
              // [remark.gfm],
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
