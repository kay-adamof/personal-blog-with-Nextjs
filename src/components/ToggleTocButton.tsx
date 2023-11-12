import { IconListTree } from '@tabler/icons-react'

export const ToggleTocButton = (props: {}) => {
  return (
    <label
      htmlFor='my-drawer'
      className='btn btn-primary drawer-button'
    >
      <IconListTree
        className='lg:hidden'
        size='1.8rem'
      />
    </label>
  )
}
