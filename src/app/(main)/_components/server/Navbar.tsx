import Link from 'next/link'

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <nav className='sticky top-0 z-10 flex justify-center border-b-0 border-slate-400 bg-transparent p-4 drop-shadow-xl'>
      <Link href={'/'}>
        <h1 className='px-24 pt-4 text-3xl text-red-300'>My Gorgeous Blog</h1>
      </Link>
      {children}
    </nav>
  )
}
