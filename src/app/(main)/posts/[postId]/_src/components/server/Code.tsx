import * as C from '../client'
import * as S from '../server'

export const Code = (props: React.PropsWithChildren): JSX.Element => (
  <pre>
    <C.ClipboardButton>
      <S.ClipboardSVG />
    </C.ClipboardButton>
    <code {...props}>{props.children}</code>
  </pre>
)
