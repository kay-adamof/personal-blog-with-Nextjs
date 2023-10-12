import '@/app/globals.css'
import '@code-hike/mdx/dist/index.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import ThemeToggleButton from '@/components/ToggleThemeButton'
import ThemeSetter from '@/components/ThemeSetter'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang='ja'
      data-theme='night'
    >
      <body className=''>
        <ThemeSetter>
          <Navbar>
            <ThemeToggleButton>Toggle Theme</ThemeToggleButton>
          </Navbar>
          {children}
        </ThemeSetter>
      </body>
    </html>
  )
}
