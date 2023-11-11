import { theme } from '@/constants/theme'
import { useEffect } from 'react'
import * as L from '@/lib'
import * as LC from '@lib[client-only]'


export const ThemeSetter = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    let storedTheme = LC.getThemeInLocalStorage()

    if (storedTheme === null) {
      // L.setDefaultThemeAsDarkToLocalStorage()
      localStorage.setItem('theme', 'dark')
      storedTheme = 'dark'
    }

    if (storedTheme === 'light') L.setDataTheme(theme.light)
    if (storedTheme === 'dark') L.setDataTheme(theme.dark)
  }, [])
  return <>{children}</>
}
