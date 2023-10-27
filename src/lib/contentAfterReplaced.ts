import { urlRegex } from '@/types/urlRegex'
import { Post } from '@/types/qiita.schema.types'

export const contentAfterReplaced = (post: Post, regex: urlRegex) =>
  post.body
    .replace(regex.Url, '\n[$1]($1)') // Make url markdown sytle
    .replace(regex.Xcom, 'https://twitter.com') // Let the twitter widget.js recognize url
    .replace(
      regex.Twitter,
      (_, $1, $2, $3) => $1 + $2.replace(/_/g, '\\_') + $3,
    ) // To avoid the parser recognizes the word surrounded by underscore as italic
