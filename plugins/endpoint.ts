import type { IEndpoint, TEndpoint } from '~/interfaces/plugins/IEndpoint'

class Endpoint implements IEndpoint {

  endpoints: TEndpoint[] = []

  constructor() {
    // this.register('/api/v1.0/store',
    //   [
    //     { name: 'products-list', address: 'product/list' }
    //   ])
  }


  register(module: string, _endpoints: TEndpoint[]): void {
    _endpoints.forEach((e: TEndpoint) => this.endpoints.push({ name: e.name, address: `${module}/${e.address}/` }))
  }

  getEndpoint(name: string): TEndpoint {
    const endpoint = this.endpoints.filter((e: TEndpoint) => e.name === name)

    if (!endpoint.length)
      throw Error("[ENDPOINTS] Couldn't find an endpoint with provided name!")

    return endpoint[0]
  }

  getUrl(name: string): string {
    const endpoint = this.endpoints.filter((e: TEndpoint) => e.name === name)

    if (!endpoint.length)
      throw Error("[ENDPOINTS] Couldn't find an endpoint with provided name!")

    return endpoint[0].address
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