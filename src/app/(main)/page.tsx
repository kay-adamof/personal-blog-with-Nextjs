import * as S from '@server_components'
import * as C from '@client_components'


export default function RootPage(){
  return (
    <>
      <S.Navbar
        left={<S.GoToRoot />}
        ToggleThemeButton={<C.ThemeToggleButton />}
        ToggleTocButton={<S.ToggleTocButton />}
      />
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <S.Posts />{' '}
      </main>
    </>
  )
}
