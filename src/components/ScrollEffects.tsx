import * as R from 'react'
import * as T from '@/types'

export const CloseDrawer = ({ children }: { children: React.ReactNode }) => {
  R.useEffect(() => {
    window.addEventListener('scroll', () => {
      const id:T.DrawerId = 'my-drawer'

      const toggler = document.querySelector(
        `input#${id}`,
      ) as HTMLInputElement | null
      toggler?.checked && toggler.click()
    })
  }, [])
  return <>
   {children} 
  </>
}

export const MakeSmoothScroll = ({
  children,
}:{
  children: React.ReactNode
})=>{
  R.useEffect(()=>{

  },[])
  return <>
    {children}
  </>
}
