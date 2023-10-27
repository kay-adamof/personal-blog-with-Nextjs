'use client'

import { theme } from '@/constants/theme'
import { useEffect } from 'react'
import { setDataTheme } from '@/lib/setDataTheme'
import { setDefaultThemeAsDark } from '@/lib/setDefaultThemeAsDark'

export const ThemeSetter = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === null) setDefaultThemeAsDark()
    if (storedTheme === 'light') setDataTheme(theme.light)
    if (storedTheme === 'dark') setDataTheme(theme.dark)
  }, [])
  return <>{children}</>
}
