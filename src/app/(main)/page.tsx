import { GoToRoot } from '@/components/GoToRoot'
import { ThemeToggleButton } from '@/components/ToggleThemeButton'
import { ToggleTocButton } from '@/components/ToggleTocButton'
import { Navbar } from '@/components/Navbar'
import { Posts } from '@/components/Posts'

export default () => {
  return (
    <>
      <Navbar
        left={<GoToRoot />}
        ToggleThemeButton={<ThemeToggleButton />}
        ToggleTocButton={<ToggleTocButton />}
      />
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <Posts />{' '}
      </main>
    </>
  )
}
