import * as Path from 'node:path/posix'
import * as URL from 'node:url'

import express from 'express'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()
server.get('/compliment', (req, res) => {
  res.send('<h1>Damnnnn shortyyy!!</h1>')
})

server.get('/profile/:name', (req, res) => {
  const value = req.params.name
  // const name = req.query.name
  if (value === 'silvia') {
    res.sendFile(Path.join(__dirname, `silvia.html`))
    console.log('silvia.html')
  } else if (value === 'sampson') {
    res.sendFile(Path.join(__dirname, `sampson.html`))
    console.log('Sampson.html')
  }
})

export default server
