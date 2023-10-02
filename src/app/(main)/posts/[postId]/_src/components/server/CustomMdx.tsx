import { MDXRemote } from 'next-mdx-remote/rsc'

const H2component = (props: React.PropsWithChildren) => (
  <h2
    {...props}
    className='text-red-300'
  >
    {props.children}
  </h2>
)

const components = {
  h2: H2component,
}

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
