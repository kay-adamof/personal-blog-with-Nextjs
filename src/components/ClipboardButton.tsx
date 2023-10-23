'use client'
import { useState } from 'react'
import CopyLinerIcon from './CopyLinerIcon'
import CheckLinerIcon from './CheckLinerIcon'

const className = {
  button: 'text-white/70 hover:text-white',
}

export default () => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <>
      <button
        className={className.button}
        onClick={e => {
          const target = e.currentTarget
          const pre = target.closest('pre')
          if (!pre?.lastElementChild) {
            console.log('Code not found')
            return
          }
          const code = pre.lastElementChild.textContent as string

          // Check if the browser supports the Clipboard API
          if (navigator.clipboard && navigator.clipboard.writeText) {
            // Save the text to the clipboard
            navigator.clipboard
              .writeText(code)
              .then(() => {
                setIsClicked(isClicked => !isClicked)
                target.disabled = true
                setTimeout(() => {
                  setIsClicked(isClicked => !isClicked)
                  target.disabled = false
                }, 800)
              })
              .catch(error => {
                console.error('Failed to save text to clipboard:', error)
              })
          } else {
            console.error('Clipboard API is not supported')
          }
        }}
      >
        {isClicked ? <CheckLinerIcon /> : <CopyLinerIcon />}
      </button>
    </>
  )
}
