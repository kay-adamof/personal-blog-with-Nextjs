import { IconContext } from 'react-icons'

export default ({ children }: { children: React.ReactNode }) => (
  <IconContext.Provider value={{ size: '1.8rem' }}>
    {children}
  </IconContext.Provider>
)
