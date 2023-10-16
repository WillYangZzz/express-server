import request from 'supertest'
import { server } from '.server.js'
import { test, expect } from 'vitest'

// GET '/' route responds with index.html text

test("GET '/' res with index.html", async () => {
  const response = await request(server).get('/')
  expect(response.text).tomMatch('Damnnnn shortyyy!!')
})
