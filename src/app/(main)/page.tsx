import {Schema} from '../../types'
import Posts from './_components/Posts'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-gray-50 dark:bg-gray-800'>
      <Posts />{' '}
    </main>
  )
}
