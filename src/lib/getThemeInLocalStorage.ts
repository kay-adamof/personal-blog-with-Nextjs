import * as T from '@/types'

export const getThemeInLocalStorage = () =>
  localStorage.getItem('theme') as T.LocalStorageTheme | null
