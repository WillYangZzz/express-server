import * as Path from 'node:path/posix'
import * as URL from 'node:url'
//import Path from 'node:path'

import express from 'express'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.static(Path.join(__dirname, '../public')))

server.use(express.urlencoded({ extended: false }))

server.get('/compliment', (req, res) => {
  res.send('<h1>"We are awesome"</h1>')
})

// server.get('/profile', (req, res) => {
//   res.sendFile(Path.join(__dirname, 'silvia.html'))
// })

// server.get('/profile/sampson', (req, res) => {
//   res.sendFile(Path.join(__dirname, 'sampson.html'))
// })

// server.get('/profile/:name', (req, res) => {
//   const name = req.params.name
//   const value = req.query.value
//   res.sendFile(Path.join(__dirname, `../public/${name}.html`))
// })

server.get('/profile', (req, res) => {
  //const name = req.params.name
  const name = req.query.name
  res.sendFile(Path.join(__dirname, `../public/${name}.html`))
})

server.get('/profiles/:id', (req, res) => {
  const value = req.params.id
  if (value === '1') {
    res.sendFile(Path.join(__dirname, '../public/silvia.html'))
  } else if (value === '2') {
    res.sendFile(Path.join(__dirname, '../public/sampson.html'))
  }
})

server.get('/get-name', (req, res) => {
  res.sendFile(Path.join(__dirname, '../public/get-name.html'))
})

server.post('/named-compliment', (req, res) => {
  //console.log(req.body)
  const value = req.body.customerName
  res.send(`<h1>Good Job ${value}!`)
  //res.redirect('/')
})

// server.get('/named-compliment', (req, res) => {
//   res.send('<h1>"We are truley awesome"</h1>')
// })

export default server
