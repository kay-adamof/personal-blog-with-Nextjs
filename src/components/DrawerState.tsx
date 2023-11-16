export type DrawerId = 'my-drawer'

export const DrawerState = () => {
  const id:DrawerId = 'my-drawer'
  return (
    <input
      id={id}
      type='checkbox'
      className='drawer-toggle'
    />
  )
}
