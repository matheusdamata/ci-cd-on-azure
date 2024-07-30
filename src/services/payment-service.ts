import { env } from '../env'

/* eslint-disable no-use-before-define */
type createPaymentResponse = {
  url: string
}

export class PaymentService {
  private static instance: PaymentService

  private readonly access_token: string

  constructor() {
    this.access_token = env.PAYMENT_ACCESS_TOKEN
  }

  static getInstance() {
    if (!PaymentService.instance) PaymentService.instance = new PaymentService()

    return PaymentService.instance
  }

  async createPayment(): Promise<createPaymentResponse> {
    // await new Promise((resolve) => setTimeout(resolve, 350)) // 3 seconds

    return {
      url: 'https://checkout.matheusdamatag.com.br/123',
    }
  }
}
