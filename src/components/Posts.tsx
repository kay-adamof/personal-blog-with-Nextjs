import Link from 'next/link'
import * as lib from '@/lib'


export const Posts = async () => {
  const posts = await lib.getPosts()

  return (
    <div className=''>
      {posts.map(post => {
        return (
          <div
            key={post.id}
            className=''
          >
            <Link href={`http://localhost:3000/posts/${post.id}`}>
              {post.title}
            </Link>
          </div>
        )
      })}
    </div>
  )
}
