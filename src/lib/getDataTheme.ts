import { MyTheme } from "@/types/MyTheme"

export const getDataTheme = () =>
  document.documentElement.getAttribute('data-theme') as
  | (MyTheme & string)
  | (string & {})
  | null
