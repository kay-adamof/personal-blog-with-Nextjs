import { MDXRemote } from 'next-mdx-remote/rsc'

const components = {
  h2: (props:React.PropsWithChildren) => (
    <h2 {...props} className="text-green-800">
      {props.children}
    </h2>
  ),
}

export function CustomMDX(props:any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
