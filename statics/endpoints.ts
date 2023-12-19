import type { TEndpoint } from '~/interfaces/plugins/IEndpoint'
import type { Guid } from '~/interfaces/base'

export const Endpoints: Record<string, TEndpoint[]> = {
  '/api/v1.0/store': [
    { name: 'products-list', address: 'product/list' },
    { name: 'products-detail', address: (id: Guid) => 'product/detail/' + id }
  ]
}