import { HTMLAttributes } from 'react'

export const getLang = (props: HTMLAttributes<HTMLElement>) => {
  if (props.className) {
    const hasLang = props.className.includes('language-')
    if (hasLang) {
      const lang = props.className.match(/(language)-(.*)/)?.at(2)
      return lang
    }
  }
}
