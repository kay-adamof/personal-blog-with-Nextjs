'use client'

export default function ThemeToggleButton({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <button
      onClick={() => {
        document.documentElement.classList.toggle('dark')
        const isDark = document.documentElement.classList.contains('dark')
        isDark
          ? localStorage.setItem('theme', 'dark')
          : localStorage.setItem('theme', 'light')
      }}
    >
      {children}
    </button>
  )
}
