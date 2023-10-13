'use client'

import { MyTheme } from '@/types'
import setDataTheme from '@/lib/setDataTheme'
import { LocalStorageTheme } from '@/types/LocalStorageTheme'

const getDataTheme = () =>
  document.documentElement.getAttribute('data-theme') as
  | (MyTheme & string)
  | (string & {})
  | null

const toStoreThemeToLocalStorage = (theme: LocalStorageTheme) => {
  localStorage.setItem('theme', theme)
}

export default function ThemeToggleButton({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <button
      onClick={() => {
        const dataTheme = getDataTheme()

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
      {children}
    </button>
  )
}
