const className = {
  button: 'text-white/70 hover:text-white',
  success: 'text-green-300',
}
export const ClipboardButton = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div>
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
                console.log('Text saved to clipboard')
                target.classList.add(className.success)
                setTimeout(() => {
                  target.classList.remove(className.success)
                }, 2000)
              })
              .catch(error => {
                console.error('Failed to save text to clipboard:', error)
              })
          } else {
            console.error('Clipboard API is not supported')
          }
        }}
      >
        {children}
      </button>
    </div>
  )
}
