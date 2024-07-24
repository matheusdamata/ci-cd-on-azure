import type { FastifyInstance } from 'fastify'
import { create } from './create'

export async function checkoutRoutes(app: FastifyInstance) {
  app.post('/create', create)
}
