import { theme } from '@/constants/theme'
import { useEffect } from 'react'
import * as lib from '@/lib'
import { LocalStorageTheme } from '@/types/LocalStorageTheme'


export const ThemeSetter = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    let storedTheme = localStorage.getItem(
      'theme',
    ) as LocalStorageTheme | null

    if (storedTheme === null) {
      lib.setDefaultThemeAsDark()
      storedTheme = 'dark'
    }

    if (storedTheme === 'light') lib.setDataTheme(theme.light)
    if (storedTheme === 'dark') lib.setDataTheme(theme.dark)
  }, [])
  return <>{children}</>
}
