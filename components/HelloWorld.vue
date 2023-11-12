<template>
  <div class="color-primary">
    Hello World! (if This Text is red scss and variables works fine!)
  </div>
  <div>
    Translation System: {{ $t('name') }}
  </div>
  <div>
    <q-btn color="primary" label="Primary" />
  </div>
</template>

<script setup>
  import { useTestStore } from '~/stores'

  const testStore = useTestStore()
  const { $logger } = useNuxtApp()

  $logger.log('Store Works Fine!: ', testStore.getName)

</script>