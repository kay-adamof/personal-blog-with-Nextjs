import getPost from '@/lib/getPost'
import ScrollToTop from '@/components/ScrollToTop'
import { Qiita } from '@/types'
import Toc from '@/components/Toc'
import * as S from '@server_components'
import * as C from '@client_components'
import { Home } from '@/components/Home'

export default async ({
  params: { postId },
}: {
  params: {
    postId: string
  }
}) => {
  const post: Qiita.Post = await getPost(postId)

  return (
    <>
      <S.Navbar
        left={<S.LinkToRoot />}
        ToggleThemeButton={<C.ThemeToggleButton />}
        ToggleTocButton={<S.ToggleTocButton />}
      />
      <main className='container mx-auto px-6'>
        <Home post={post} />
      </main>
      <Toc post={post}>{}</Toc>
      <ScrollToTop>{'Go to Top'}</ScrollToTop>
    </>
  )
}
