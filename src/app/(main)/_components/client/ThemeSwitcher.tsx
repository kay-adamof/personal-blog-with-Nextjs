'use client'

import { cl } from '@/util'
import React, { ReactNode } from 'react'
import { useState, useEffect } from 'react'

const DefaultTheme = 'dark'

export default function ThemeSwitcher({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(DefaultTheme)

  const key = 'theme'

  // useEffect(() => {
  //   const stored = localStorage.getItem(key)
  // }, [])
  //
  // useEffect(() => {
  //   localStorage.setItem(key,"dark")
  // }, [])

  return <div className='theme'>{children}</div>
}
