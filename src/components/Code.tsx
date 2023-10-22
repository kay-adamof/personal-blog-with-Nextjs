import { HTMLAttributes, ReactNode } from 'react'
import ClipboardButton from './ClipboardButton'

export const Code = (props: HTMLAttributes<HTMLElement>): ReactNode => {
  let content: ReactNode = ''

  // Two possibilities: 'inline code' / 'fenced code block'
  // Only 'fenced code block' has
  const codeType: 'inline' | 'fenced' = props.className ? 'fenced' : 'inline'

  switch (codeType) {
    case 'fenced':
      content = (
        <>
          <ClipboardButton />
          <code {...props}>{props.children}</code>
        </>
      )
      break

    case 'inline':
      content = (
        <>
          <span className='relative'>
            <span
              className='absolute -inset-0.5 block mx-0.5'
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
