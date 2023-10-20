import Link from 'next/link'
import ThemeToggleButton from './ToggleThemeButton'
import MoonStarsIcon from './MoonStarsIcon'

export default () => {
  return (
    <nav className='navbar'>
      <div className='flex-1'>
        <Link href={'/'}>
          <h1 className=''>My Gorgeous Blog</h1>
        </Link>
      </div>
      <div className='flex-none'>
        <ThemeToggleButton />
      </div>
    </nav>
  )
}
