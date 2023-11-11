import * as T from '@/types'
import * as L from '@/lib'
import * as C from '@/constants'

export const contentAfterReplaced = async (A: { post: T.Post }) => {
  let postBody: string = A.post.body

  postBody = L.replacer.escapeRecognitionOfChildren(postBody)

  postBody = L.replacer.tweet(postBody)

  postBody = L.replacer.youtube(postBody)

  const urlStrings = await L.getUrlStrings(postBody)

  if (!urlStrings) {
    return postBody
  }

  const [...metadataArray] = await L.getMetadataArray(urlStrings)

  postBody = L.replacer.cardStyleLink(postBody, metadataArray)

  return postBody
}
