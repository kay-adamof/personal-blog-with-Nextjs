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
      }}
    >
      {children}
    </button>
  )
}
