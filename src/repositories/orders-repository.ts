export type CreateOrdersProps = {
  userId: string
  productId: string
  price: number
}

type CreateOrdersResponse = {
  orderId: string
}

export interface OrdersRepository {
  create(data: CreateOrdersProps): Promise<CreateOrdersResponse>
}
