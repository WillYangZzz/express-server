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
  res.sendFile(Path.join(__dirname, 'compliment.html'))
})

server.get('/profile', (req, res) => {
  res.sendFile(Path.join(__dirname, 'silvia.html'))
})
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
