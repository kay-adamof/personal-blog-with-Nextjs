import * as T from '@/types'
import * as CT from '@/constants'
import type { Qiita } from '@/types'

export default async () => {
  const res = await fetch(CT.itemsUrl,{ next: { revalidate: 3600 } })
  const posts: Qiita.Post[] = await res.json()
  return posts
}
