import { HTMLAttributes, ReactNode } from 'react'
import ClipboardButton from './ClipboardButton'
import * as S from '@server_components'
import * as L from '@/lib'
import * as c from '@/constants'

export default (props: HTMLAttributes<HTMLElement>): ReactNode => {
  let content: ReactNode = ''

  // Two possibilities: 'inline code' / 'fenced code block'
  // Only 'fenced code block' has
  const codeType: 'inline' | 'fenced' = props.className ? 'fenced' : 'inline'

  switch (codeType) {
    case 'fenced':
      let lang = L.getLang(props)
      if (!lang) lang = ''
      const langAliase = c.lowerCasedAliases[lang]
      content = (
        <>
          <div className='navbar'>
            <div className='navbar-start'>
              <S.LangBadge
                lang={langAliase}
                langIcon={<i className={`devicon-${langAliase}-original colored`}></i>}
              />
            </div>
            <div className='navbar-end'>
              <ClipboardButton />
            </div>
          </div>
          <code {...props}>{props.children}</code>
        </>
      )
      break

    case 'inline':
      content = (
        <>
          <span className='relative'>
            <span
              className='absolute -inset-0.5 mx-0.5 block'
              aria-hidden='true'
            ></span>
            <code className="relative before:mr-1 before:content-[''] after:ml-1 after:content-['']">
              {props.children}
            </code>
          </span>
        </>
      )
      break
    default:
      content = (
        <>
          <code {...props} />
        </>
      )

      break
  }

  return content
}
