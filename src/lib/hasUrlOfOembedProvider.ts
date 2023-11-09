import { URL } from 'url'

export const hasUrlOfOembedProvider = (url: URL, providerUrls: string[]) => {
  return providerUrls
    .map(providerUrl => providerUrl.includes(url.hostname))
    .some(v => v === true)
}
