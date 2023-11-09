import * as T from '@/types'

export const getThemeInLocalStorage = () => {
  const theme = localStorage.getItem('theme') as T.LocalStorageTheme | null
  return theme ? theme : 'dark'
}
