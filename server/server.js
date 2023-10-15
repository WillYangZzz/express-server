import * as Path from 'node:path/posix'
import * as URL from 'node:url'

import express from 'express'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

export default server

// server listens on port 3000

server.listen(3000, () => {
  console.log('server is listening on port 3000')
})
