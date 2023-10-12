import Link from 'next/link'

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className='navbar'>
      <Link href={'/'}>
        <h1 className=''>My Gorgeous Blog</h1>
      </Link>
      {children}
    </nav>
  )
}
