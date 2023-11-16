import * as R from 'react'
import * as O from '@observer[client-components]'


export const H2 = (props: R.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <O.SyncWithToc id={props?.id}>
      <h2
        className='scroll-mt-16'
        {...props}
      >
        {props.children}
      </h2>
    </O.SyncWithToc>
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
