import * as Path from 'node:path/posix'
import * as URL from 'node:url'

import express from 'express'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.get('/compliment', (req, res) => {
  res.send("You're the best!")
})

server.get('/fortune', (req, res) => {
  res.sendFile(Path.join(__dirname, 'silvia.html'))
})

export default server

// Remember:
// Public folder for HTML and CSS files
// Public folder for images
// Expose public folder in _dirname^^
