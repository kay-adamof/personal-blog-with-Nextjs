import * as T from '@/types'

export const theme: Record<T.LocalStorageTheme, T.MyTheme> = {
  light: 'lemonade',
  dark: 'night',
} as const
