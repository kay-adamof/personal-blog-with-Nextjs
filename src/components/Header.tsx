import * as R from 'react'

export const H2 = (props: R.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className='scroll-mt-16'
      {...props}
    >
      {props.children}
    </h2>
  )
}
export const H3 = (props: R.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      className='scroll-mt-16'
      {...props}
    >
      {props.children}
    </h3>
  )
}

