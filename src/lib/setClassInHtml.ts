import * as T from '@/types'

export const setClassInHtml = (theme: T.LocalStorageTheme) => {
  if (theme === 'dark') {
    document.documentElement.classList.remove('dark')
  }
  if (theme === 'light') {
    document.documentElement.classList.add('dark')
  }
}

