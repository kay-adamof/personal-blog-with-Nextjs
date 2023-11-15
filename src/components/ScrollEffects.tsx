import * as R from 'react'
export const CloseDrawer = ({ children }: { children: React.ReactNode }) => {
  R.useEffect(() => {
    // if drawer is opened in which hidden input is active
    window.addEventListener('scroll', () => {
      const toggler = document.querySelector(
        'input#my-drawer',
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
