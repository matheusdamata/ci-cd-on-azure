import { beforeEach, describe, expect, it } from 'vitest'
import { CreateCheckoutUseCase } from '../../../src/use-cases/create-checkout'
import { InMemoryOrdersRepository } from '../../../src/repositories/in-memory/in-memory-users-repository'
import sinon from 'sinon'
import { PaymentService } from '../../../src/services/payment-service'

let ordersRepository: InMemoryOrdersRepository
let sut: CreateCheckoutUseCase

let sandbox: sinon.SinonSandbox

describe('Create Checkout Use Case', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox()

    ordersRepository = new InMemoryOrdersRepository()
    sut = new CreateCheckoutUseCase(ordersRepository)
  })

  it('should be able create checkout', async () => {
    const data = {
      userId: '12345',
      productId: '123',
      price: 29.9,
    }

    sandbox
      .stub(PaymentService.prototype, 'createPayment')
      .resolves({ url: 'https://checkout.matheusdamatag.com.br/123-456' })

    const { url } = await sut.execute(data)

    expect(url).toEqual('https://checkout.matheusdamatag.com.br/123-456')
  })
})
