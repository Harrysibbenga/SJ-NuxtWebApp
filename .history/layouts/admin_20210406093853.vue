<template>
  <v-app light>
    <v-main class="white">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { init } from '@/mixins/init'
export default {
  mixins: [init],
}
</script>
