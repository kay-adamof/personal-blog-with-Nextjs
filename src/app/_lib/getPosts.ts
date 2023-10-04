import * as T from '@/types'
import * as CT from '@/constants'

export const getPosts = async () => {
  const res = await fetch(CT.itemsUrl,{ next: { revalidate: 3600 } })
  const posts: T.Post[] = await res.json()
  return posts
}
