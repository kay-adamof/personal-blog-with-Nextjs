import * as T from '@/types'

export const makeComponent = (
  componentName: T.ComponentName,
  data: (str: T.KeyOfMetadata) => string,
) => {
  return [
    componentName,
    `description="${data('og:description')}"`,
    `title="${data('og:title')}"`,
    `imageSrc="${data('og:image')}"`,
  ].join(' ')
}
