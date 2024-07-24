import type { FastifyReply, FastifyRequest } from 'fastify'
import { makeCreateCheckoutUseCase } from '../../../use-cases/factories/make-create-checkout-use-case'
import { z } from 'zod'
import { BadRequestError } from '../../../use-cases/errors/bad-request-error'

const createBodySchema = z.object({
  userId: z.string(),
  productId: z.string(),
  price: z.number(),
})

export async function create(req: FastifyRequest, reply: FastifyReply) {
  const { price, productId, userId } = createBodySchema.parse(req.body)

  try {
    const createCheckout = makeCreateCheckoutUseCase()

    const { url } = await createCheckout.execute({ price, productId, userId })

    return reply.status(201).send({ checkout_url: url })
  } catch (error) {
    if (error instanceof BadRequestError) {
      return reply.status(400).send({ message: error.message })
    }

    throw error
  }
}
