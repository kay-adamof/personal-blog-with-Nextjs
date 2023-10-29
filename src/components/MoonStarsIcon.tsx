import { TbMoonStars } from 'react-icons/tb'
import { IconContext } from 'react-icons'

export const MoonStarsIcon = () => (
  <IconContext.Provider value={{ size: '1.8rem' }}>
    <div>
      <TbMoonStars />
    </div>
  </IconContext.Provider>
)
