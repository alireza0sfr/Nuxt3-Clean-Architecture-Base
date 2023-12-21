import type { UseFetchOptions } from '#app'
import type { IApi } from '~/interfaces/plugins/IApi'

import { defu } from 'defu'
import { Endpoint } from './endpoint'
import { Response, Exception } from '~/domain/base'

class Api implements IApi {

  createInstance<T>(endpointName: string, payload?: T | Partial<T>, options?: UseFetchOptions<Response<T>>): Promise<Response<T>> {

    const _endpoint = new Endpoint()
    const url = _endpoint.getUrl(endpointName)
    const defaultOptions = this.createCustomOptions<T>(endpointName, payload)
    options = defu(defaultOptions, options)

    return new Promise((resolve, reject) => {
      useFetch(url, options)
        .then((res) => {

          if (res && res.data && res.data.value)
            resolve(res.data.value)
        })
        .catch((err: Exception) => reject(err))
    })
  }

  createCustomOptions<T>(endpointName: string, payload?: T | Partial<T>): UseFetchOptions<Response<T>> {
    return {
      baseURL: '',
      key: endpointName,
      server: true,
      lazy: false,
      immediate: true,
      deep: true,
      headers: {
        Accept: 'application/json'
      },
      watch: false,
      pick: undefined,
      timeout: 5000,
      body: payload ? payload : undefined,
      query: undefined,
      transform: (res) => res,
      onRequest({ request, options }) { },
      onRequestError({ request, options, error }) { },
      onResponse({ request, response, options }) { },
      onResponseError({ request, response, options }) { }
    }
  }

  get<T>(endpointName: string, options?: UseFetchOptions<Response<T>>): Promise<Response<T>> {
    options = Object.assign(options || {}, { method: 'GET' })

    return new Promise((resolve, reject) => {
      this.createInstance<T>(endpointName, undefined, options)
        .then(res => {
          resolve(res)
        })
        .catch((err: Exception) => {
          reject(err)
        })
    })
  }

  post<T>(endpointName: string, payload: T, options?: UseFetchOptions<Response<T>>): Promise<Response<T>> {
    options = Object.assign(options || {}, { method: 'POST' })

    return new Promise((resolve, reject) => {
      this.createInstance<T>(endpointName, payload, options)
        .then(res => {
          resolve(res)
        })
        .catch((err: Exception) => {
          reject(err)
        })
    })
  }

  put<T>(endpointName: string, payload: T, options?: UseFetchOptions<Response<T>>): Promise<Response<T>> {
    options = Object.assign(options || {}, { method: 'PUT' })

    return new Promise((resolve, reject) => {
      this.createInstance<T>(endpointName, payload, options)
        .then(res => {
          resolve(res)
        })
        .catch((err: Exception) => {
          reject(err)
        })
    })
  }

  patch<T>(endpointName: string, payload: Partial<T>, options?: UseFetchOptions<Response<T>>): Promise<Response<T>> {
    options = Object.assign(options || {}, { method: 'PATCH' })

    return new Promise((resolve, reject) => {
      this.createInstance<T>(endpointName, payload, options)
        .then(res => {
          resolve(res)
        })
        .catch((err: Exception) => {
          reject(err)
        })
    })
  }

  delete<T>(endpointName: string, options?: UseFetchOptions<Response<T>>): Promise<Response<any>> {
    options = Object.assign(options || {}, { method: 'DELETE' })

    return new Promise((resolve, reject) => {
      this.createInstance<T>(endpointName, undefined, options)
        .then((res) => {
          resolve(res)
        })
        .catch((err: Exception) => {
          reject(err)
        })
    })
  }

}

export default defineNuxtPlugin(() => {

  return {
    provide: {
      api: new Api()
    }
  }
})