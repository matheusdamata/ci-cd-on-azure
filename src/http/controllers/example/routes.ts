import type { FastifyInstance } from 'fastify'
import { check } from './check'

export async function exampleRoutes(app: FastifyInstance) {
  app.get('/', check)
}
