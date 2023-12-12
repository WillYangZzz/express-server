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
  res.sendFile(Path.join(__dirname, 'index.html'))
})

server.get('/compliment', (req, res) => {
  res.send(`<h1>You look amazing today!<h1>`)
})

server.get('/named-compliment', (req, res) => {
  res.sendFile(Path.join(__dirname, 'public', 'get-name.html'))
})

export default server
