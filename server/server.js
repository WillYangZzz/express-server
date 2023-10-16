import * as Path from 'node:path/posix'
import * as URL from 'node:url'

import express from 'express'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

export default server
server.use(express.static(Path.join(__dirname, '../public')))
server.use(express.urlencoded({ extended: false }))

// // add a root called /compliment
server.get('/', (req, res) => {
  res.send('<h1>You are handsome!</h1>')
})

server.get('/profile', (req, res) => {
  let fileName = req.query.name + '.html'

  res.sendFile(Path.join(__dirname, '../public', fileName))
})

server.get('/profiles/:id', (req, res) => {
  const value = req.params.id
  if (value === '1') {
    res.sendFile(Path.join(__dirname, '../public/silvia.html'))
  } else if (value === '2') {
    res.sendFile(Path.join(__dirname, '../public/sampson.html'))
  }
})

server.get('/hello', (req, res) => {
  res.send('Wauuu! you made it')
})

server.post('/get-name', (req, res) => {
  console.log(req.body)
  res.redirect('/hello')
})
