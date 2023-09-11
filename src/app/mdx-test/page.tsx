import {cl} from '@/util'
import {compileMDX} from 'next-mdx-remote/rsc'

export default async function MdxTest() {
  // Optionally provide a type for your frontmatter object
  const {content, frontmatter} = await compileMDX<{title: string}>({
    source: `---
      title: RSC Frontmatter Example
      ---
      # Hello World
      This is from Server Components!
    `,
    options: {parseFrontmatter: true},
  })
  cl(frontmatter)
  return (
    <>
      <h1 className='text-red-300'>My new Blog! {frontmatter.title}</h1>
      {content}
    </>
  )
}
