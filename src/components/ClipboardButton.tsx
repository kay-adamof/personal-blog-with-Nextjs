'use client'

import { ReactNode, useState } from 'react'
// import CopyLinerIcon from './CopyLinerIcon'
// import CheckLinerIcon from './CheckLinerIcon'

export const ClipboardButton = (props: {
  IconOnClicked: ReactNode
  IconOnNotClicked: ReactNode
}) => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <>
      <button
        className='text-white/70 hover:text-white'
        onClick={e => {
          const target = e.currentTarget
          const pre = target.closest('pre')
          if (!pre?.lastElementChild?.textContent) {
            throw new Error('Code not found')
          }
          const code = pre.lastElementChild.textContent

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
        {isClicked ? props.IconOnClicked : props.IconOnNotClicked}
      </button>
    </>
  )
}
