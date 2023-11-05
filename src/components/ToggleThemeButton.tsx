import { LocalStorageTheme } from '@/types/LocalStorageTheme'
import { TbMoonStars, TbSunHigh } from 'react-icons/tb'
import { IconContext } from 'react-icons'
import { useState, useEffect } from 'react'
import * as lib from '@/lib'
import * as T from '@/types'
import * as lc from '@lib[client-only]'


export const ThemeToggleButton = () => {
  const [theme, setTheme] = useState<T.LocalStorageTheme>('dark')

  useEffect(() => {
    setTheme(lc.getThemeInLocalStorage() as T.LocalStorageTheme)
  }, [])

  return (
    <button
      onClick={() => {
        setTheme(theme === ('dark' || null) ? 'light' : 'dark')
        setAndStoreTheme[theme]()
      }}
    >
      <IconContext.Provider value={{ size: '1.8rem' }}>
        {theme === 'dark' ? <TbMoonStars /> : <TbSunHigh />}
      </IconContext.Provider>
    </button>
  )
}


const toStoreThemeToLocalStorage = (theme: LocalStorageTheme) => {
  localStorage.setItem('theme', theme)
}

const setAndStoreTheme: Record<T.LocalStorageTheme, () => void> = {
  dark: () => {
    lib.setDataTheme('lemonade')
    toStoreThemeToLocalStorage('light')
  },
  light: () => {
    lib.setDataTheme('night')
    toStoreThemeToLocalStorage('dark')
  },
}

