import * as L from '@/lib'
import * as C from '@/constants'

export const getUrlStrings = async (str: string) => {
    const providers = await L.getOembedProvidersUrl()
    return str
      .match(C.regex.Url)
      ?.map(urlStr => new URL(urlStr))
      ?.map(url => !L.hasUrlOfOembedProvider(url, providers) && url.toString())
  }


