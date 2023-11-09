import * as T from '@/types'
import * as L from '@/lib'
import * as C from '@/constants'
import urlMetadata from 'url-metadata'

const getUrlStrings = async (str: string) => {
  const providers = await L.getOembedProvidersUrl()
  return str
    .match(C.regex.Url)
    ?.map(urlStr => new URL(urlStr))
    ?.map(url => !L.hasUrlOfOembedProvider(url, providers) && url.toString())
}

const replacer = {
  tweet: (str: string) =>
    str.replace(C.regex.toGetTwitterId, (_, $1) => L.makeReactTweet($1)),
  cardStyleLink: (
    postBody: string,
    metadataArray: Awaited<ReturnType<typeof getMetadataArray>>,
  ) => {
    let i = 0
    return postBody.replace(C.regex.Url, (match, _) => {
      const data = metadataArray[i]
      i++
      return data ? `<${L.makeComponent('CardStyleLink', data)} />` : match
    })
  },
  markdownLink: (postBody: string) => postBody.replace(C.regex.Url, '\n[$1]($1)')
}

const getMetadataArray = async (urlStrings: (string | false)[]) => {
  const promises = urlStrings.map(urlStr => urlStr && urlMetadata(urlStr))
  const [...urlMetadataResults] = await Promise.all(promises)
  return urlMetadataResults.map(result => (result ? L.getMeta(result) : false))
}

export const contentAfterReplaced = async (A: { post: T.Post }) => {
  let postBody: string = A.post.body

  postBody = replacer.tweet(A.post.body)

  const urlStrings = await getUrlStrings(postBody)

  if (!urlStrings) return postBody

  const [...metadataArray] = await getMetadataArray(urlStrings)

  postBody = replacer.cardStyleLink(postBody, metadataArray)

  postBody = replacer.markdownLink(postBody)

  return postBody
}
