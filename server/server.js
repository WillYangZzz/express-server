import * as Path from 'node:path/posix'
import * as URL from 'node:url'

import express from 'express'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.static(Path.join(__dirname, 'public')))

// express can handle POST requests with forms
server.use(express.urlencoded({ extended: false }))

server.get('/', (req, res) => {
  res.send(`<h1>Home Page</h1>`)
})

server.get('/compliment', (req, res) => {
  res.send(`<h1>You look amazing today!</h1>`)
})

server.get('/named-compliment', (req, res) => {
  res.sendFile(Path.join(__dirname, 'public', 'get-name.html'))
})

server.post('/named-compliment', (req, res) => {
  res.send(
    `${req.body.name}, you look great today! </br></br><a href='/named-compliment'>Go back</a>`
  )
})

server.get('/profiles/:id', (req, res) => {
  let fileName
  console.log(req.params.id)

  switch (req.params.id) {
    case '1': {
      res.sendFile(Path.join(__dirname, 'public/silvia.html'))
      break
    }
    case '2': {
      res.sendFile(Path.join(__dirname, 'public/sampson.html'))
      break
    }
    default: {
      res.send('invalid page')
    }
  }
})

server.get('/profile', (req, res) => {
  const fileName = req.query.name + '.html'
  res.sendFile(Path.join(__dirname, 'public', fileName))
})

export default server
