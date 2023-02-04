import request from 'supertest'

import { app, routerPrefix } from '@root/server'

describe(`GET ${routerPrefix}/`, () => {
  test('should always return 200 and text hello world', async () => {
    const response = await request(app).get(`${routerPrefix}/`)
    expect(response.status).toBe(200)
    expect(response.body).toEqual({
      ok: true,
      data: {
        message: 'Hello World!'
      }
    })
  })
})
