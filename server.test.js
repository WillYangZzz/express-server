import request from 'supertest'
import { test, expect } from 'vitest'
import server from './server/server'

test('test /compliment', async () => {
  const response = await request(server).get('/compliment')
  expect(response.text).toContain('Something nice')
})

test('test /giveCompliment', async () => {
  const response = await request(server)
    .post('/giveCompliment')
    .send('theCompliment=ricky')
    .type('form')

  expect(response.text).toMatch('ricky is a really awesome person')
})

test('test params', async () => {
  const response = await request(server).get('/profiles/2')

  expect(response.text).toMatch('Sampson')
})

test('test query', async () => {
  const response = await request(server).get('/profile?name=silvia')
  expect(response.text).toMatch('Silvia')
})
