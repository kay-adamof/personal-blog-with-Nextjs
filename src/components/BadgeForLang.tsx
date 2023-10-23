import { ReactNode } from 'react'

export const LangBadge = (props: { lang: string; langIcon: ReactNode }) => {
  return (
    <div className='badge badge-outline gap-1'>
      {props.langIcon}
      {props.lang}
    </div>
  )
}
