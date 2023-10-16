import * as Path from 'node:path/posix'
import * as URL from 'node:url'

import express from 'express'
import path from 'node:path'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

export default server
server.use(express.static(Path.join(__dirname, 'public')))
server.use(express.urlencoded({ extended: false }))

// // add a root called /compliment
server.get('/', (req, res) => {
  res.send('<h1>You are handsome!</h1>')
})

server.get('/profile', (req, res) => {
  let fileName = req.query.name + '.html'

  res.sendFile(Path.join(__dirname, fileName))
})

// another route that accepts a dynamic param
// server.get('/ascii/:profile/:id', (req, res) => {
//   const value = req.params.id // <===== the dynamic param
//   // query params are added by using the ? character and then key/value pairs

//   if (value === '1') {
//     res.sendFile(Path.join(__dirname, 'silvia.html'))
//   } else if (value === '2') {
//     res.sendFile(Path.join(__dirname, 'sampson.html'))
//   }
// })

// server.get('/compliment', (req, res) => {
//   res.send('<h1> You are handsome! </h1>')
// })

// add a route called /compliment
// server.get('public/compliment', (req, res) => {
//   res.sendFile(Path.join(__dirname, 'compliment.html'))
// })

// server listens on port 3000

// server.listen(3000, () => {
//   console.log('server is listening on port 3000')
// })
