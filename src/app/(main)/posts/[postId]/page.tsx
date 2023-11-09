import { getPost } from '@/lib/getPost'
import * as T from '@/types'
import * as S from '@server_components'
import * as C from '@client_components'

export default async function PostPage({
  params: { postId },
}: {
  params: {
    postId: string
  }
}){
  const post: T.Post = await getPost(postId)

  return (
    <>
      <S.Navbar
        left={<S.GoToRoot />}
        ToggleThemeButton={<C.ThemeToggleButton />}
        ToggleTocButton={<S.ToggleTocButton />}
      />
      <main className='container mx-auto px-6'>
        <S.Home post={post} />
      </main>
      <S.Toc post={post}>{}</S.Toc>
      <C.ScrollToTop>{'Go to Top'}</C.ScrollToTop>
    </>
  )
}
