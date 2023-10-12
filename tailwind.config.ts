import type { Config } from 'tailwindcss'
import type { Config as DaisyUiConfig, Theme } from 'daisyui'
import { MyTheme } from '@/types'

const myTheme:Extract<Theme, MyTheme>[] = ['lemonade','night']
const daisyUiConfig: DaisyUiConfig = {
  themes: myTheme,
  base: true,
  styled: true,
  utils: true,
  rtl: false,
  prefix: '',
  logs: false, // <== IMPORTANT: To avoid error in using Next.js @2023-10-10
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  darkMode: 'class',
  daisyui: daisyUiConfig
}

export default config
