import fastify from 'fastify'
import { exampleRoutes } from './http/controllers/example/routes'

export const app = fastify()

app.register(exampleRoutes)
