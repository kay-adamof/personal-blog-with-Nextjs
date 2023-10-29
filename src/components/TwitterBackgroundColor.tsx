import Script from 'next/script'

const handleLoad = () => {
  twttr.ready(twttr => {
    twttr.events.bind('rendered', (event: Event) => {
      // console.log(event.target.querySelector('iframe'))
      const iframe = event.target.querySelector('iframe') as HTMLIFrameElement
      const iframeGlobal= document.getElementById(`${iframe.id}`) as HTMLIFrameElement
      console.log(iframeGlobal.querySelector('div'))
    })
  })
}

export const TwitterBackgroundColor = () => {
  return (
    <>
      <Script
        src='https://platform.twitter.com/widgets.js'
        onLoad={handleLoad}
      />
    </>
  )
}
