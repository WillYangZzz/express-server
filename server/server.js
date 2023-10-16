import * as Path from 'node:path/posix'
import * as URL from 'node:url'

import express from 'express'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()
export default server
// express will now expose the public/ folder to be accessible for any web requests
server.use(express.static(Path.join(__dirname, 'public')))
// express can handle POST requests with forms
server.use(express.urlencoded({ extended: false }))

server.get('/compliment', (req, res) => {
  res.send("<h1>You're a good person.</h1>")
})

server.get('/profile/:name', (req, res) => {
  const name = req.params.name
  res.sendFile(Path.join(__dirname, `/public/${name}.html`))
})
server.get('/profile/', (req, res) => {
  console.log(req)
  const name = req.query.name
  res.sendFile(Path.join(__dirname, `/public/${name}.html`))
})

console.log(Path.join(__dirname, 'public'))

server.get('/profiles/:id', (req, res) => {
  const id = req.params.id
  if (id == '1') {
    res.sendFile(Path.join(__dirname, '/public/silvia.html'))
  } else if (id == '2') {
    res.sendFile(Path.join(__dirname, '/public/sampson.html'))
  }
})

server.get('/get-name', (req, res) => {
  res.sendFile(Path.join(__dirname, '/public/get-name.html'))
})

server.post('/named-compliment', (req, res) => {
  const name = req.body.name
  res.send(`<h1>You are a person, ${name}.</h1>`)
})
