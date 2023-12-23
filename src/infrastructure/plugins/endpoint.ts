import type { IEndpoint, TEndpoint } from '~/application/interfaces/plugins/IEndpoint'
import { Endpoints } from '~/application/statics/endpoints'

export class Endpoint implements IEndpoint {

  endpoints: TEndpoint[] = []

  constructor() {

    for (const [key, value] of Object.entries(Endpoints))
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