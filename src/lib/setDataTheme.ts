import { MyTheme } from "@/types/MyTheme";

export const setDataTheme = (theme: MyTheme) => document.documentElement.setAttribute('data-theme', theme)
