import fastify from 'fastify'
import { checkoutRoutes } from './http/routes/checkout/routes'
import { ZodError } from 'zod'

export const app = fastify()

app.register(checkoutRoutes, {
  prefix: '/checkout',
})

app.setErrorHandler((err, _, reply) => {
  if (err instanceof ZodError)
    return reply.status(400).send({
      message: 'Validation error',
      issues: err.format(),
    })

  return reply.status(500).send({
    message: 'Internal server error',
  })
})
