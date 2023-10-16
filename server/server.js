import * as Path from 'node:path/posix'
import * as URL from 'node:url'

import express from 'express'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.static(Path.join(__dirname, `public`)))

server.use(express.urlencoded({ extended: false }))

server.get('/compliment', (req, res) => {
  res.send('Your the Man!')
})

// server.get('/name', (req, res) => {
//   console.log(req.body.name)
// })

server.post('/named-compliment', (req, res) => {
  console.log(req.body.name)
  const person = req.body.name
  res.send(`Have a good day ` + person)
  // res.redirect(`/name`)
})

server.get('/profile/', (req, res) => {
  const name = req.query.name
  res.sendFile(__dirname, `../public/${name}.html`)
})

server.get('/profile/:name', (req, res) => {
  const name = req.params.name

  if (name === '1') {
    res.sendFile(Path.join(__dirname, `public/silvia.html`))
  } else if (name === '2') {
    res.sendFile(Path.join(__dirname, `public/sampson.html`))
  } else {
    res.sendFile(Path.join(__dirname, `public/${name}.html`))
  }
})

// console.log(name)
export default server
