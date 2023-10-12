'use client'

import { MyTheme } from '@/types'
import React from 'react'
import { useEffect } from 'react'
import setTheme from '@/lib/setTheme'

const theme: Record<'light' | 'dark', MyTheme> = {
  light: 'lemonade',
  dark: 'night',
}

export default ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')

    if (storedTheme === 'light') {
      setTheme(theme.light)
    }
    if (storedTheme === ('dark' || null)) {
      setTheme(theme.dark)
    }
  }, [])
  return <>{children}</>
}
