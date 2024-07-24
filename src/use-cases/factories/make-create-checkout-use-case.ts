import { InMemoryOrdersRepository } from '../../repositories/in-memory/in-memory-users-repository'
import { CreateCheckoutUseCase } from '../create-checkout'

export function makeCreateCheckoutUseCase() {
  const ordersRepository = new InMemoryOrdersRepository()
  return new CreateCheckoutUseCase(ordersRepository)
}
