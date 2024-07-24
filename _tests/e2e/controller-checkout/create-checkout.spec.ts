import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'
import { app } from 'src/app'

describe('Create Checkout (e2e)', () => {
  beforeAll(async () => await app.ready())

  afterAll(async () => await app.close())

  it('should be able create a checkout', async () => {
    const data = {
      userId: '1',
      productId: '123',
      price: 29.9,
    }

    const response = await request(app.server)
      .post('/checkout/create')
      .send(data)

    expect(response.status).toEqual(201)
    expect(response.body).toEqual({
      checkout_url: 'https://checkout.matheusdamatag.com.br/123',
    })
  })
})
