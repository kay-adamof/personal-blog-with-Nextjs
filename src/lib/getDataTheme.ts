import { MyTheme } from '@/types'
export const getDataTheme = () =>
  document.documentElement.getAttribute('data-theme') as
  | (MyTheme & string)
  | (string & {})
  | null
