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
const sampsonPath = Path.join(__dirname, 'sampson.html')

// params example
// server.get('/profile/:name', (req, res) => {
//   // res.sendFile(sampsonPath)
//   let name = req.params.name

//   console.log(req.params.name)

//   if (name == 'silvia') {
//     res.sendFile(silviaPath)
//   } else if (name == 'sampson') {
//     res.sendFile(sampsonPath)
//   }
// })

// query example
server.get('/profile', (req, res) => {
  // res.sendFile(sampsonPath)
  let name = req.query.name

  console.log(req.query.name)

  if (name == 'silvia') {
    res.sendFile(silviaPath)
  } else if (name == 'sampson') {
    res.sendFile(sampsonPath)
  }
})
