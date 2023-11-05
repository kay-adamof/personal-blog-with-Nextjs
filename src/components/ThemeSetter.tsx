import { theme } from '@/constants/theme'
import { useEffect } from 'react'
import * as lib from '@/lib'
import * as lc from '@lib[client-only]'


export const ThemeSetter = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    let storedTheme = lc.getThemeInLocalStorage()

    if (storedTheme === null) {
      lib.setDefaultThemeAsDark()
      storedTheme = 'dark'
    }

    if (storedTheme === 'light') lib.setDataTheme(theme.light)
    if (storedTheme === 'dark') lib.setDataTheme(theme.dark)
  }, [])
  return <>{children}</>
}
