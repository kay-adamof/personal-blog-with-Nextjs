import { getPost } from '@/lib/getPost'
import { Post } from '@/types/qiita.schema.types'
import { Navbar } from '@/components/Navbar'
import { ThemeToggleButton } from '@/components/ToggleThemeButton'
import { ToggleTocButton } from '@/components/ToggleTocButton'
import { Home } from '@/components/Home'
import { Toc } from '@/components/Toc'
import { ScrollToTop } from '@/components/ScrollToTop'
import { GoToRoot } from '@/components/GoToRoot'

export default async ({
  params: { postId },
}: {
  params: {
    postId: string
  }
}) => {
  const post: Post = await getPost(postId)

  return (
    <>
      <Navbar
        left={<GoToRoot />}
        ToggleThemeButton={<ThemeToggleButton />}
        ToggleTocButton={<ToggleTocButton />}
      />
      <main className='container mx-auto px-6'>
        <Home post={post} />
      </main>
      <Toc post={post}>{}</Toc>
      <ScrollToTop>{'Go to Top'}</ScrollToTop>
    </>
  )
}
