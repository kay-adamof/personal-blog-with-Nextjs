import Link from 'next/link'

export default function Navbar({children}: {children: React.ReactNode}) {
  return (
    <header>
      <nav>
        <Link href={'/'}>
          <h1 className='px-24 pt-4 text-3xl text-red-300'>My Gorgeous Blog</h1>
        </Link>
        {children}
      </nav>
    </header>
  )
}
