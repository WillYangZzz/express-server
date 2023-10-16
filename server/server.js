import * as Path from 'node:path/posix'
import * as URL from 'node:url'

import express from 'express'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

// creating public statiuc folder
server.use(express.static(Path.join(__dirname, 'public')))

// express can handle POST requests with forms
server.use(express.urlencoded({ extended: false }))

// 1. simple page with html
server.get('/compliment', (req, res) => {
  res.send('<h1>Damnnnn shortyyy!!</h1>')
})

// 3. Respond based on the query
server.get('/profile', (req, res) => {
  const profile = req.query.profile
  if (profile === 'silvia') {
    res.sendFile(Path.join(__dirname, `silvia.html`))
  } else if (profile === 'sampson') {
    res.sendFile(Path.join(__dirname, `sampson.html`))
  }
})

// 4. responf based on url parameter
server.get('/profiles/:id', (req, res) => {
  const value = req.params.id
  // const name = req.query.name
  if (value === '1') {
    res.sendFile(Path.join(__dirname, `silvia.html`))
  } else if (value === '2') {
    res.sendFile(Path.join(__dirname, `sampson.html`))
  }
})

// 7. form input and output with a compliment

server.get('/get-name', (req, res) => {
  res.sendFile(Path.join(__dirname, `/public/get-name.html`))
})

server.post('/get-name', (req, res) => {
  res.send(`<h2>Thanks ${req.body.getName} ya legend!</h2>`)
})

export default server
