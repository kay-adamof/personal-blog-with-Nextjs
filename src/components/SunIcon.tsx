import { IconContext } from 'react-icons'
import { TbSunHigh } from 'react-icons/tb'

export const SunIcon = () => {
  return (
    <IconContext.Provider value={{ size: '1.8rem' }}>
      <TbSunHigh />
    </IconContext.Provider>
  )
}
