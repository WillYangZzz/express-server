import * as Path from 'node:path/posix'
import * as URL from 'node:url'

import express from 'express'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

export default server

server.get('/compliment', (req, res) => {
  res.send('Something nice')
})

const silviaPath = Path.join(__dirname, 'silvia.html')
server.get('/profile', (req, res) => {
  res.sendFile(silviaPath)
})
