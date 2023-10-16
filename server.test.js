import { test, expect } from 'vitest'
import request from 'supertest'
import server from './server/server.js'

test('test homepage', async () => {
  const response = await request(server).get('/')

  expect(response.text).toMatch(`<h1>Home Page</h1>`)
})

test('test compliment page', async () => {
  const response = await request(server).get('/compliment')

  expect(response.text).toMatch(`<h1>You look amazing today!</h1>`)
})

test('test named-compliment page', async () => {
  const response = await request(server).get('/named-compliment')

  expect(response.text).toContain(
    `<form method="post" action="/named-compliment">`
  )
})

test('test post from named-compliment page', async () => {
  const name = 'nameOfBob'
  const response = await request(server)
    .post('/named-compliment')
    .send(`name=${name}`)

  expect(response.text).toContain(`${name}, you look great today!`)
})

test('test /profiles/:id page', async () => {
  const response = await request(server).get('/profiles/2')

  expect(response.text).toContain(`<li>Name: Sampson</li>`)
})

test('test /profile?name=silvia page', async () => {
  const response = await request(server).get('/profile?name=silvia')

  expect(response.text).toContain(`<li>Name: Silvia</li>`)
})
