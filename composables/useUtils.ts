
export const useUtils = () => {
  const { $logger } = useNuxtApp()

  const init = () => $logger.log('Composables Works Fine!')
  return {
    init,
  }
}