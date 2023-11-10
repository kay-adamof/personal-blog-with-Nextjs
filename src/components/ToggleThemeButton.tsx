import * as icon from '@/components/icons'
import * as R from 'react'
import * as L from '@/lib'
import * as T from '@/types'
import * as LC from '@lib[client-only]'

export const ThemeToggleButton = () => {
  const [theme, setTheme] = R.useState<T.LocalStorageTheme>('dark')

  R.useEffect(() => {
    const themeInLocalStorage = LC.getThemeInLocalStorage()
    if (theme !== themeInLocalStorage) {
      setTheme(themeInLocalStorage)
    }
  }, [])

  return (
    <button
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
        setAndStoreTheme[theme]()
      }}
    >
        {theme === 'dark' ? <icon.DarkModeIcon /> : <icon.LightModeIcon />}
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
