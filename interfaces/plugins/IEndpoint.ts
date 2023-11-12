export type TEndpoint = {
  name: string,
  address: string
}

export interface IEndpoint {
  endpoints: TEndpoint[]

  register(module: string, _endpoints: TEndpoint[]): void
  getEndpoint(name: string): TEndpoint
  getUrl(name: string): string
}