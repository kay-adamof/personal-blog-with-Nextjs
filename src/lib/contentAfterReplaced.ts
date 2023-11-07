import { Post } from '@/types/qiita.schema.types'
import * as lib from '@/lib'
import * as T from '@/types'

export const contentAfterReplaced = (post: Post, regex: T.RegexForReplacingContent) =>
  post.body
    .replace(regex.toGetTwitterId, (_, $1) => lib.makeReactTweet($1))
    .replace(regex.Url, '\n[$1]($1)') // Make url markdown sytle
