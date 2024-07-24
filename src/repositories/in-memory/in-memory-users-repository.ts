import { randomUUID } from 'crypto'
import type { OrdersRepository, CreateOrdersProps } from '../orders-repository'

type OrdersProps = {
  id: string
  userId: string
  productId: string
  price: number
}

export class InMemoryOrdersRepository implements OrdersRepository {
  private orders: OrdersProps[] = []

  async create(data: CreateOrdersProps) {
    const orderId = randomUUID()

    const order = {
      id: orderId,
      ...data,
    }

    this.orders.push(order)

    return {
      orderId,
    }
  }
}
