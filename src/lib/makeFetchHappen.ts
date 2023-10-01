import path from 'path'
import fetch from 'make-fetch-happen'

fetch.defaults({
  cachePath: './my-cache' // path where cache will be written (and read)
})
// const fetch = require('make-fetch-happen').defaults({
//   cachePath: './my-cache' // path where cache will be written (and read)
// })

// fetch.defaults({
//   cachePath:  './my-cache',
// })
//
const getData = async () => {
  const res = await fetch('https://registry.npmjs.org/make-fetch-happen')
  await res.json()
}
getData()
