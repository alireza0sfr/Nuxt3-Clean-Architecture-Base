import type { UseFetchOptions } from '#app'
import type { Response } from '~/domain/base'

export type HTTPMethods = "GET" | "HEAD" | "PATCH" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE"
export type Encodings = false | "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex"

export interface IApi {
  createInstance<T>(endpointName: string, payload?: T | Partial<T>, options?: UseFetchOptions<Response<T>>): Promise<Response<T | null>>
  createCustomOptions<T>(endpointName: string, payload?: T | Partial<T>): UseFetchOptions<Response<T>>
  get<T>(endpointName: string, options?: UseFetchOptions<Response<T>>): Promise<Response<T | null>>
  post<T>(endpointName: string, payload: T, options?: UseFetchOptions<Response<T>>): Promise<Response<T | null>>
  put<T>(endpointName: string, payload: T, options?: UseFetchOptions<Response<T>>): Promise<Response<T | null>>
  patch<T>(endpointName: string, payload: Partial<T>, options?: UseFetchOptions<Response<T>>): Promise<Response<T | null>>
  delete<T>(endpointName: string, options?: UseFetchOptions<Response<T>>): Promise<Response<any>>
}