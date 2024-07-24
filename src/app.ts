import fastify from 'fastify'
import { checkoutRoutes } from './http/routes/checkout/routes'

export const app = fastify()

app.register(checkoutRoutes, {
  prefix: '/checkout',
})
