import * as lib from '@/lib'
import * as T from '@/types'

export async function Tweet({url}:{url: string}) {

  const res = await lib.getOEmbed(url)
  if (!res.ok) {throw new Error(`Error status: ${res.status}`)}

  const data: T.TweetInfo = await res.json()

  const content = await lib.renderReact(data.html)

  return (
    <div>{content}</div>
  )
}
