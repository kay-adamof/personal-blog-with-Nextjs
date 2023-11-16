import * as R from 'react'

export const IFrame = (props: R.HTMLAttributes<HTMLIFrameElement>) => {
  return (
    <iframe
      loading='lazy'
      {...props}
    >
      {props.children}
    </iframe>
  )
}
