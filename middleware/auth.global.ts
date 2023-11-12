export default defineNuxtRouteMiddleware((to, form) => {
  const { $logger } = useNuxtApp()
  $logger.log('Global Middleware Works Fine!')
})