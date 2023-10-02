import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'
import { Code } from '../client/Code'

const H2component = (props: React.PropsWithChildren): JSX.Element => (
  <h2
    {...props}
    className='text-red-300'
  >
    {props.children}
  </h2>
)

const components = {
  h2: H2component,
  code: Code,
}

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
