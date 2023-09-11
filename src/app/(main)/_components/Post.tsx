import {IPost} from '@/qiita.schema.types'
import Link from 'next/link'
import React from 'react'

type Props = {
  post: IPost
}

export default function Post({post}: Props) {
  return (
    <div className='dark:text-white'>
      <Link href={`http://localhost:3000/posts/${post.id}`}>{post.title}</Link>
    </div>
  )
}
