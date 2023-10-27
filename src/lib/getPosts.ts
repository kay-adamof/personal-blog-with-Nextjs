import { itemsUrl } from '@/constants/url'
import { Post } from '@/types/qiita.schema.types'

export default async () => {
  const res = await fetch(itemsUrl,{ next: { revalidate: 3600 } })
  const posts: Post[] = await res.json()
  return posts
}
