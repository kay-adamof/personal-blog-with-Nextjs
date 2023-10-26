import * as S from '@server_components'
import * as C from '@client_components'
import Posts from "@/components/Posts"

export default ()=> {
  return (
    <> 
      <S.Navbar 
        left={<S.LinkToRoot />}
        ToggleThemeButton={<C.ToggleThemeButton />}
        ToggleTocButton={<S.ToggleTocButton />}
      />
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <Posts />{' '}
      </main>
    </> 
  )
}
