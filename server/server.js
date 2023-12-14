import * as Path from 'node:path/posix'
import * as URL from 'node:url'

import express from 'express'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)
const server = express()

// express will now expose the public/ folder to be accessible for any web requests
server.use(express.static(Path.join(__dirname, 'public')))
// express can handle POST requests with forms
server.use(express.urlencoded({ extended: false }))

// this is the homepage and users can view it by typing localhost:3000/
server.get('/', (req, res) => {
  res.send(`<h1>Home Page</h1>`)
})

server.get('/compliment', (req, res) => {
  res.send(`<h1>You look amazing today!<h1>`)
})

server.get('/compliment/:name', (req, res) => {
  const name = req.params.name
  const person = req.query.person
  res.send(`<h1>Have a good day ${name} and ${person}</h1>`)
})

server.get('/profile', (req, res) => {
  const name = req.query.name

  res.sendFile(Path.join(__dirname, `../public/${name}.html`))
})

server.get('/profile/:num', (req, res) => {
  const num = req.params.num

  if (num === '1') {
    res.sendFile(Path.join(__dirname, `../public/silvia.html`))
  } else if (num === '2') {
    res.sendFile(Path.join(__dirname, `../public/sampson.html`))
  } else {
    res.sendFile(Path.join(__dirname, `../public/${num}.html`))
  }
})

server.get('/named-compliment', (req, res) => {
  res.sendFile(Path.join(__dirname, '../public/get-name.html'))
})

server.post('/named-compliment', (req, res) => {
  const person = req.body.name
  res.send(`<h1>Have a good day ${person} </h1>`)
})

export default server
