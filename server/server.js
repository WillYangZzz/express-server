import * as Path from 'node:path/posix'
import * as URL from 'node:url'

import express from 'express'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.static(Path.join(__dirname, 'public')))

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

export default server
