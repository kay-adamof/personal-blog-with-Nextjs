export const Navbar = (props: {
  ToggleThemeButton: React.ReactNode
  ToggleTocButton: React.ReactNode
  left: React.ReactNode
}) => {
  return (
    <nav className='navbar sticky top-0 z-40 bg-black'>
      <div className='flex-1'>{props.left}</div>
      <div className='flex-none'>
        {props.ToggleThemeButton}
        {props.ToggleTocButton}
      </div>
    </nav>
  )
}
