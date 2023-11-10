import * as L from '@/lib'
import * as S from '@server_components'
import * as C from '@client_components'

export async function generateStaticParams() {
  const posts = await L.getPosts()

  return posts.map(post => ({
    slug: post.id,
  }))
}

export default async function PostPage({
  params: { postId },
}: {
  params: {
    postId: string
  }
}) {
  const post = await L.getPost(postId)

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
