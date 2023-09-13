'use client'

import { cl } from '@/util'
import React from 'react'
import { useEffect } from 'react'

export default function ThemeSetter({
  children,
}:{
  children: React.ReactNode
}) {
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    cl(storedTheme)
    if(storedTheme==='light'){
    }
    if(storedTheme===('dark' || null)){
      document.documentElement.classList.add('dark')
    }
  }, [])
  return (
    <>{children}</>
  )
}
