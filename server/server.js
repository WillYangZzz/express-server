import * as Path from 'node:path/posix'
import * as URL from 'node:url'

import express from 'express'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.static(Path.join(__dirname, `/public`)))

// server.get('/', (res, req) => {
//   res.send(`You're the man!`)
// })

server.get('/compliment', (req, res) => {
  res.send('Your the Man!')
})

server.get('/profile/', (req, res) => {
  const name = req.query.name

  console.log(name)
  res.sendFile(Path.join(__dirname, `/public/${name}.html`))
})

server.get('/profile/:name', (req, res) => {
  const name = req.params.name

  console.log(name)
  res.sendFile(Path.join(__dirname, `/public/${name}.html`))
})

export default server
