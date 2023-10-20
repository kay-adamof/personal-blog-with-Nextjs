async function loadTwitterWidget(d, s, id) {
  var twitterWidget = window.twttr || {}

  if (d.getElementById(id)) {
    return twitterWidget
  }

  var fjs = d.getElementsByTagName(s)[0]
  var js = d.createElement(s)

  js.id = id
  js.src = 'https://platform.twitter.com/widgets.js'

  fjs.parentNode.insertBefore(js, fjs)

  twitterWidget._e = []
  twitterWidget.ready = function(callback) {
    
    twitterWidget._e.push(callback)
  }

  return twitterWidget
}

var twitterWidget = loadTwitterWidget(document, 'script', 'twitter-wjs').then(
  () => {
    window.addEventListener('load', () => {
      const iframes = document.querySelectorAll('iframe')
      iframes.forEach((v,k,p)=>console.log(v))

    })
  },
)

        src='https://platform.twitter.com/widgets.js'
        // id='twitter-widgets'
        strategy='lazyOnload'
        onLoad={() => {
          window.addEventListener('load', () => {
            console.log('start loaded')
            const iframes = document.querySelectorAll('iframe')
            iframes.forEach((v, k, p) =>{
              console.log(v.id.includes('twitter-widget'))
              if(v.id.includes('twitter-widget')){
                if ( v.contentDocument?.getElementById('app') ) console.log('hello')
              }

            })
          })
        }}

