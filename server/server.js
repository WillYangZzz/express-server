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
//make it so that express can handle post request with forms
server.use(express.urlencoded({ extended: false }))
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

// //thankyou page
// server.get('/thankyou', (req, res) => {
//   res.send('thank you for the compliment')
// })

//links get-name.html to /giveCompliment
server.get('/giveCompliment', (req, res) => {
  res.sendFile(Path.join(__dirname, 'public/get-name.html'))
})

// compliment form
server.post('/giveCompliment', (req, res) => {
  console.log(req.body.theCompliment)
  // res.redirect('/thankyou')
  res.send(`${req.body.theCompliment} is a really awesome person`)
})
