import type { FastifyReply, FastifyRequest } from 'fastify'

export async function check(_: FastifyRequest, reply: FastifyReply) {
  return reply.status(200).send({ message: 'Hello' })
}
