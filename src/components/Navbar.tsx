import Link from 'next/link'

interface Props {
  ToggleThemeButton: React.ReactNode
  left: React.ReactNode
}

export default (props: Props) => {
  return (
    <nav className='navbar'>
      <div className='flex-1'>
        {props.left}
      </div>
      <div className='flex-none'>
        {props.ToggleThemeButton}
      </div>
    </nav>
  )
}
