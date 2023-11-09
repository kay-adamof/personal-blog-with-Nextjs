import * as T from '@/types'
import * as L from '@/lib'
import * as C from '@/constants'
import urlMetadata from 'url-metadata'

export const contentAfterReplaced = async (A: {
  post: T.Post
}) => {
  let postBody: string = ''

  const providers = await L.getOembedProvidersUrl()

  postBody = A.post.body.replace(C.regex.toGetTwitterId, (_, $1) =>
    L.makeReactTweet($1),
  )

  const urlStrings = postBody
    .match(C.regex.Url)
    ?.map(urlStr => new URL(urlStr))
    ?.map(url => !L.hasUrlOfOembedProvider(url, providers) && url.toString())

  if (!urlStrings) return postBody

  const promises = urlStrings.map(urlStr => urlStr && urlMetadata(urlStr))
  const [...urlMetadataResults] = await Promise.all(promises)
  const [...metadataArray] = urlMetadataResults.map(result =>
    result ? L.getMeta(result) : false,
  )

  let i = 0
  postBody = postBody.replace(C.regex.Url, (_, $1) => {
    const data = metadataArray[i]
    i++
    return data ? `<${L.makeComponent('CardStyleLink', data)} />` : $1
  })

  return postBody

  // return A.post.body
  //   .replace(C.regex.toGetTwitterId, (_, $1) => L.makeReactTweet($1))
  //   .replace(C.regex.Url, (_, $1) =>
  //     L.makeCardStyleLink({ urlStr: $1, providers: providers }),
  //   )
  //   .replace(C.regex.Url, '\n[$1]($1)') // Make url markdown sytle
}
