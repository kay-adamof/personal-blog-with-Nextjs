import { LocalStorageTheme } from "@/types/LocalStorageTheme"
import { MyTheme } from "@/types/MyTheme"

export const theme: Record<LocalStorageTheme, MyTheme> = {
  light: 'lemonade',
  dark: 'night',
} as const
