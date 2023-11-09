import { TbMoonStars, TbSunHigh } from 'react-icons/tb'
import { IconContext } from 'react-icons'
import * as R from 'react'
import * as L from '@/lib'
import * as T from '@/types'
import * as LC from '@lib[client-only]'

export const ThemeToggleButton = () => {
  const [theme, setTheme] = R.useState(LC.getThemeInLocalStorage())

  return (
    <button
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
        setAndStoreTheme[theme]()
      }}
    >
      <IconContext.Provider value={{ size: '1.8rem' }}>
        {theme === 'dark' ? <TbMoonStars /> : <TbSunHigh />}
      </IconContext.Provider>
    </button>
  )
}

const toStoreThemeToLocalStorage = (theme: T.LocalStorageTheme) => {
  localStorage.setItem('theme', theme)
}

const setAndStoreTheme: Record<T.LocalStorageTheme, () => void> = {
  dark: () => {
    L.setDataTheme('lemonade')
    toStoreThemeToLocalStorage('light')
  },
  light: () => {
    L.setDataTheme('night')
    toStoreThemeToLocalStorage('dark')
  },
}
