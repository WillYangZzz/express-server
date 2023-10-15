import * as Path from 'node:path/posix'
import * as URL from 'node:url'

import express from 'express'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()
server.get('/compliment', (req, res) => {
  res.send('<h1>Damnnnn shortyyy!!</h1>')
})

// // 3. Respond based on the query
// server.get('/profile/:name', (req, res) => {
//   const value = req.params.name
//   // const name = req.query.name
//   if (value === 'silvia') {
//     res.sendFile(Path.join(__dirname, `silvia.html`))
//     console.log('silvia.html')
//   } else if (value === 'sampson') {
//     res.sendFile(Path.join(__dirname, `sampson.html`))
//     console.log('Sampson.html')
//   }
// })

// 4. responf based on url parameter
server.get('/profiles/:id', (req, res) => {
  const value = req.params.id
  // const name = req.query.name
  if (value === '1') {
    res.sendFile(Path.join(__dirname, `silvia.html`))
    console.log('silvia.html')
  } else if (value === '2') {
    res.sendFile(Path.join(__dirname, `sampson.html`))
    console.log('Sampson.html')
  }
})
export default server
