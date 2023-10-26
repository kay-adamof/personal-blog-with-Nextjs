'use client'

import setDataTheme from '@/lib/setDataTheme'
import { LocalStorageTheme } from '@/types/LocalStorageTheme'
import { TbMoonStars, TbSunHigh } from 'react-icons/tb'
import { IconContext } from 'react-icons'
import { useState } from 'react'
import * as L from '@/lib'

const toStoreThemeToLocalStorage = (theme: LocalStorageTheme) => {
  localStorage.setItem('theme', theme)
}

export default function ThemeToggleButton() {
  const [theme, setTheme] = useState(true)
  return (
    <button
      onClick={() => {
        const dataTheme = L.getDataTheme()
        setTheme(!theme)

        if (dataTheme === 'lemonade') {
          setDataTheme('night')
          toStoreThemeToLocalStorage('dark')
        }
        if (dataTheme === 'night') {
          setDataTheme('lemonade')
          toStoreThemeToLocalStorage('light')
        }
      }}
    >
      <IconContext.Provider value={{ size: '1.8rem' }}>
        {L.getDataTheme() === 'night' ? <TbMoonStars /> : <TbSunHigh />}
      </IconContext.Provider>
    </button>
  )
}
