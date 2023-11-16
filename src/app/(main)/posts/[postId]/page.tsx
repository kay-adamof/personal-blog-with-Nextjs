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
    <div className=''>
      <S.DrawerState />
      <div className=''>
        <S.Navbar
          left={<S.GoToRoot />}
          ToggleThemeButton={<C.ThemeToggleButton />}
          ToggleTocButton={<S.ToggleTocButton />}
        />
        <div className='flex'>
          <main className='container mx-auto px-6'>
            <S.Home post={post} />
          </main>
        </div>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <S.Toc post={post}>Table of Contents</S.Toc>
      </div>
      {/* <C.ScrollToTop>{'Go to Top'}</C.ScrollToTop> */}
    </div>
  )
}
