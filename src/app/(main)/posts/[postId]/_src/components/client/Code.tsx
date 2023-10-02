'use client'
import {Snippet} from "@nextui-org/react";

export const Code = (props: React.PropsWithChildren): JSX.Element => (
  <pre>
    <button>COPY</button>
    <code
      {...props}
    >
      {props.children}
    </code>
  </pre>
)

