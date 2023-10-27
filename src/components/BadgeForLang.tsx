import { ReactNode } from 'react'

export const LangBadge = (props: { lang?: string; LangIcon?: ReactNode }) => {
  return (
    <div className='badge badge-outline gap-1'>
      {props.LangIcon}
      {props.lang}
    </div>
  )
}
