'use client'

import { setDataTheme } from '@/lib/setDataTheme'
import { LocalStorageTheme } from '@/types/LocalStorageTheme'
import { TbMoonStars, TbSunHigh } from 'react-icons/tb'
import { IconContext } from 'react-icons'
import { useState } from 'react'
import { getDataTheme } from '@/lib/getDataTheme'

const toStoreThemeToLocalStorage = (theme: LocalStorageTheme) => {
  localStorage.setItem('theme', theme)
}

export const ThemeToggleButton = () => {
  const [theme, setTheme] = useState(true)
  return (
    <button
      onClick={() => {
        const dataTheme = getDataTheme()
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
        {getDataTheme() === 'night' ? <TbMoonStars /> : <TbSunHigh />}
      </IconContext.Provider>
    </button>
  )
}
