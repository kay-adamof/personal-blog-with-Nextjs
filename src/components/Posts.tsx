import Link from 'next/link'
import getPosts from '@/lib/getPosts'

export const Posts = async () => {
  const posts = await getPosts()

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
