import Link from 'next/link'
import * as L from '@/lib'


export const Posts = async () => {
  const posts = await L.getPosts()

  return (
    <div className=''>
      {posts.map(post => {
        return (
          <div
            key={post.id}
            className=''
          >
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </div>
        )
      })}
    </div>
  )
}
