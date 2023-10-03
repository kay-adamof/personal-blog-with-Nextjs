import { useState } from 'react'
import * as Icon from './icons'

const className = {
  button: 'text-white/70 hover:text-white',
  success: '',
}
export const ClipboardButton = () => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <>
      <button
        className={className.button}
        onClick={e => {
          const target = e.currentTarget
          const pre = target.closest('pre')
          if (pre === null) {
            console.log('Code not found')
            return
          }
          const code = pre.textContent as string

          // Check if the browser supports the Clipboard API
          if (navigator.clipboard && navigator.clipboard.writeText) {
            // Save the text to the clipboard
            navigator.clipboard
              .writeText(code)
              .then(() => {
                setIsClicked(isClicked=>!isClicked)
                target.disabled=true
                setTimeout(() => {
                  setIsClicked(isClicked=>!isClicked)
                  target.disabled=false
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
        {isClicked?<Icon.CheckLinearIcon/>:<Icon.CopyLinearIcon/>}
      </button>
    </>
  )
}
