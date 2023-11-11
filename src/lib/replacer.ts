import * as T from '@/types'
import * as L from '@/lib'
import * as C from '@/constants'


export const replacer = {
    youtube: (str: string) =>
      str.replace(C.regex.YouTube, (_, url) => `\n<Suspense fallback={<CardSkeleton />}></Suspense>\n`),
    tweet: (str: string) =>
      str.replace(C.regex.toGetTwitterId, (_, $1) => L.makeReactTweet($1)),
    cardStyleLink: (
      postBody: string,
      metadataArray: Awaited<ReturnType<typeof T.getMetadataArray>>,
    ) => {
      let i = 0
      return postBody.replace(C.regex.Url, (match, _) => {
        const data = metadataArray[i]
        i++
        return data ? `<${L.makeComponent('CardStyleLink', data)} />` : match
      })
    },
    markdownLink: (postBody: string) =>
      postBody.replace(C.regex.Url, '\n[$1]($1)'),
    escapeRecognitionOfChildren: (postBody: string) =>
      postBody.replace(C.regex.children, '\\{ $1 }'),
  }
