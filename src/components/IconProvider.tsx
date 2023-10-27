'use client'
import { IconContext } from 'react-icons'

export const IconPropvider = ({ children }: { children: React.ReactNode }) => (
  <IconContext.Provider value={{ size: '1.8rem' }}>
    {children}
  </IconContext.Provider>
)
