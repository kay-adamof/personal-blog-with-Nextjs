import { Tweet } from 'react-tweet'

export const MyTweet = ({ id }: { id: string }) => {
  return (
    <div className='light dark:dark'>
      <Tweet
        id={id}
      />
    </div>
  )
}
