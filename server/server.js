import * as Path from 'node:path/posix'
import * as URL from 'node:url'

import express from 'express'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

export default server

server.get('/compliment', (req, res) => {
  res.send(`<h1>You look amonzing today!</h1>`)
})
