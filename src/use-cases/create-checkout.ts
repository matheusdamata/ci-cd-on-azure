import type { OrdersRepository } from '../repositories/orders-repository'
import { PaymentService } from '../services/payment-service'
import { BadRequestError } from './errors/bad-request-error'

type CreateCheckoutRequest = {
  userId: string
  productId: string
  price: number
}

type CreateCheckoutResponse = {
  url: string
}

export class CreateCheckoutUseCase {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute({
    userId,
    productId,
    price,
  }: CreateCheckoutRequest): Promise<CreateCheckoutResponse> {
    const { orderId } = await this.ordersRepository.create({
      userId,
      productId,
      price,
    })

    if (!orderId) throw new BadRequestError('Failed to create order.')

    const paymentService = PaymentService.getInstance()

    const { url } = await paymentService.createPayment()

    if (!url) throw new BadRequestError('Failed to create checkout.')

    return { url }
  }
}
