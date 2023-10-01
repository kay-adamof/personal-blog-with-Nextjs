export async function getOEmbed(url: string): Promise<Response> {
  const res = await fetch(`https://publish.twitter.com/oembed?url=${url}`)

  return res
}

