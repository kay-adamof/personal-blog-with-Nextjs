import { LocalStorageTheme } from '@/types/LocalStorageTheme'
import { TbMoonStars, TbSunHigh } from 'react-icons/tb'
import { IconContext } from 'react-icons'
import { useState, useRef, useEffect } from 'react'
import * as lib from '@/lib'
import * as T from '@/types'

const toStoreThemeToLocalStorage = (theme: LocalStorageTheme) => {
  localStorage.setItem('theme', theme)
}

export const ThemeToggleButton = () => {
  const [theme, setTheme] = useState<T.MyTheme>('night')

  useEffect(() => {
    lib.local()
  }, [])

  return (
    <button
      onClick={() => {
        const dataTheme = lib.getDataTheme()
        setTheme(!theme)

        if (dataTheme === 'lemonade') {
          lib.setDataTheme('night')
          toStoreThemeToLocalStorage('dark')
        }
        if (dataTheme === 'night') {
          lib.setDataTheme('lemonade')
          toStoreThemeToLocalStorage('light')
        }
      }}
    >
      {/* <IconContext.Provider value={{ size: '1.8rem' }}> */}
      {/*   {lib.getDataTheme() === 'night' ? <TbMoonStars /> : <TbSunHigh />} */}
      {/* </IconContext.Provider> */}
    </button>
  )
}
