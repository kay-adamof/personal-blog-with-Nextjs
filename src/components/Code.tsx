import { HTMLAttributes, ReactNode } from 'react'
import { getLang } from '@/lib/getLang'
import { lowerCasedAliases } from '@/constants/languageAliases'
import { ClipboardButton } from './ClipboardButton'
import { CheckLinerIcon } from './CheckLinerIcon'
import { CopyLinerIcon } from './CopyLinerIcon'

export const Code = (props: HTMLAttributes<HTMLElement>): ReactNode => {
  let content: ReactNode = ''

  // Two possibilities: 'inline code' / 'fenced code block'
  // Only 'fenced code block' has
  const codeType: 'inline' | 'fenced' = props.className ? 'fenced' : 'inline'

  if (codeType === 'fenced') {
    let lang = getLang(props)
    if (!lang) lang = ''
    const langAliase = lowerCasedAliases[lang]
    content = (
      <>
        <div className='navbar'>
          <div className='navbar-start'>
            <LangBadge
              lang={langAliase}
              LangIcon={
                <i className={`devicon-${langAliase}-original colored`}></i>
              }
            />
          </div>
          <div className='navbar-end'>
            <ClipboardButton
              IconOnClicked={<CheckLinerIcon />}
              IconOnNotClicked={<CopyLinerIcon />}
            />
          </div>
        </div>
        <code {...props}>{props.children}</code>
      </>
    )
  }
  // switch (codeType) {
  //   case 'fenced':
  //     let lang = getLang(props)
  //     if (!lang) lang = ''
  //     const langAliase = lowerCasedAliases[lang]
  //     content = (
  //       <>
  //         <div className='navbar'>
  //           <div className='navbar-start'>
  //             <S.LangBadge
  //               lang={langAliase}
  //               langIcon={<i className={`devicon-${langAliase}-original colored`}></i>}
  //             />
  //           </div>
  //           <div className='navbar-end'>
  //             <C.ClipboardButton />
  //           </div>
  //         </div>
  //         <code {...props}>{props.children}</code>
  //       </>
  //     )
  //     break
  //
  //   case 'inline':
  //     content = (
  //       <>
  //         <span className='relative'>
  //           <span
  //             className='absolute -inset-0.5 mx-0.5 block'
  //             aria-hidden='true'
  //           ></span>
  //           <code className="relative before:mr-1 before:content-[''] after:ml-1 after:content-['']">
  //             {props.children}
  //           </code>
  //         </span>
  //       </>
  //     )
  //     break
  //   default:
  //     content = (
  //       <>
  //         <code {...props} />
  //       </>
  //     )
  //
  //     break
  // }

  return content
}

const LangBadge = (props: { lang?: string; LangIcon?: ReactNode }) => {
  return (
    <div className='badge badge-outline gap-1'>
      {props.LangIcon}
      {props.lang}
    </div>
  )
}
