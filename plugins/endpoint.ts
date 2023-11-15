import type { IEndpoint, TEndpoint } from '~/interfaces/plugins/IEndpoint'
import type { Guid } from '~/interfaces/plugins/base'

const endpoints: Record<string, TEndpoint[]> = {
  '/api/v1.0/store': [
    { name: 'products-list', address: 'product/list' },
    { name: 'products-detail', address: (id: Guid) => 'product/detail/' + id }
  ]
}

class Endpoint implements IEndpoint {

  endpoints: TEndpoint[] = []

  constructor() {
  
    for (const [key, value] of Object.entries(endpoints))
      this.register(key, value)

  }


  register(module: string, _endpoints: TEndpoint[]): void {
    _endpoints.forEach((e: TEndpoint) => this.endpoints.push({ module: module, name: e.name, address: e.address }))
  }

  getUrl(name: string, ...args: any[]): string {
    const endpoint = this.endpoints.find((e: TEndpoint) => e.name === name)

    if (!endpoint)
      throw Error("[ENDPOINTS] Couldn't find an endpoint with provided name!")

    return this.prepareAddress(endpoint, ...args)
  }

  prepareAddress(endpoint: TEndpoint, ...args: any[]): string {
    return typeof endpoint.address === 'function' ? `${endpoint.module}/${endpoint.address(...args)}/` : `${endpoint.module}/${endpoint.address}/`
  }
}

export default defineNuxtPlugin(() => {
  const _endpoint = new Endpoint()

  return {
    provide: {
      endpoint: _endpoint
    }
  }
})