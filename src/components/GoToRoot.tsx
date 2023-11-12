import Link from 'next/link'

export const GoToRoot = () => (
  <Link href={'/'}>
    <h1 className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500'>Blog</h1>
  </Link>
)
