'use client'

import * as c from '@/constants'
import { useEffect } from 'react'
import setDataTheme from '@/lib/setDataTheme'
import setDefaultThemeAsDark from '@/lib/setDefaultThemeAsDark'

export default ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === null) setDefaultThemeAsDark()
    if (storedTheme === 'light') setDataTheme(c.theme.light)
    if (storedTheme === 'dark') setDataTheme(c.theme.dark)
  }, [])
  return <>{children}</>
}
