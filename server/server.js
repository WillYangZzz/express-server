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

server.use(express.static(Path.join(__dirname, './public')))

const silviaPath = Path.join(__dirname, 'public/silvia.html')
const sampsonPath = Path.join(__dirname, 'public/sampson.html')

// query example
server.get('/profile', (req, res) => {
  // res.sendFile(sampsonPath)
  let name = req.query.name
  if (name == 'silvia') {
    res.sendFile(silviaPath)
  } else if (name == 'sampson') {
    res.sendFile(sampsonPath)
  }
})

// params example
server.get('/profiles/:s', (req, res) => {
  // res.sendFile(sampsonPath)
  let name = req.params.s
  if (name == '1') {
    res.sendFile(silviaPath)
  } else if (name == '2') {
    res.sendFile(sampsonPath)
  }
})
