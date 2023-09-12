'use client'
import React from 'react'

export default function ScrollToTop({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <button
      aria-hidden='true'
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
      }}
    >
      {children}
    </button>
  )
}
