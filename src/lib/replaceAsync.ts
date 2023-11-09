import * as T from '@/types'

export const replaceAsync = async (
  str: string,
  regex: RegExp,
  asyncFn: (...args: T.replacerParams) => Promise<string>,
) => {
  const promises: any[] = []
  str.replace(regex, (match, ...args) => {
    const promise = asyncFn(match, ...args)
    promises.push(promise)
    return ''
  })
  const data = await Promise.all(promises)
  return str.replace(regex, () => data.shift())
}
