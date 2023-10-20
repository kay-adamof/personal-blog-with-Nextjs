'use client'

import { MyTheme } from '@/types'
import setDataTheme from '@/lib/setDataTheme'
import { LocalStorageTheme } from '@/types/LocalStorageTheme'
import { TbMoonStars, TbSunHigh } from 'react-icons/tb'
import { IconContext } from 'react-icons'
import { useState } from 'react'

const getDataTheme = () =>
  document.documentElement.getAttribute('data-theme') as
  | (MyTheme & string)
  | (string & {})
  | null

const toStoreThemeToLocalStorage = (theme: LocalStorageTheme) => {
  localStorage.setItem('theme', theme)
}

export default function ThemeToggleButton() {
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
