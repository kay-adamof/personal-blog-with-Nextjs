import * as T from '@/types'

export const getPost = async (postId: string):Promise<T.Post> => {
  const res = await fetch(`https://qiita.com/api/v2/items/${postId}`, {
    next: { revalidate: 3600 },
  })
  return await res.json()
}
