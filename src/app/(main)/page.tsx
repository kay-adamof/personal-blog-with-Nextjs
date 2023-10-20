import Navbar from "@/components/Navbar"
import Posts from "@/components/Posts"

export default ()=> {
  return (
    <> 
      <Navbar />
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <Posts />{' '}
      </main>
    </> 
  )
}
