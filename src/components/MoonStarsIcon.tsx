'use client'
import { TbMoonStars,TbSun } from 'react-icons/tb'
import { IconContext } from 'react-icons'

export default () => (
  <IconContext.Provider value={{ size: '1.8rem' }}>
    <div>
      <TbMoonStars />
    </div>
  </IconContext.Provider>
)
