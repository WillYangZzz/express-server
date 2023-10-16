import request from 'supertest'
import server from './server.js'
import { test, expect } from 'vitest'

// GET '/' res with compliment.html text
test("GET '/' res with compliment.html", async () => {
  const response = await request(server).get('/')
  expect(response.text).toContain('handsome')
})

test("GET '/profiles/1' res with value", async () => {
  const response = await request(server).get('/profiles/2')
  expect(response.text).toContain('sampson profile')
})
