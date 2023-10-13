'use client'

import { MyTheme } from '@/types'
import { useEffect } from 'react'
import setDataTheme from '@/lib/setDataTheme'
import setDefaultThemeAsDark from '@/lib/setDefaultThemeAsDark'
import { LocalStorageTheme } from '@/types/LocalStorageTheme'

const theme: Record<LocalStorageTheme, MyTheme> = {
  light: 'lemonade',
  dark: 'night',
}

export default ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === null) setDefaultThemeAsDark()
    if (storedTheme === 'light') setDataTheme(theme.light)
    if (storedTheme === 'dark') setDataTheme(theme.dark)
  }, [])
  return <>{children}</>
}
