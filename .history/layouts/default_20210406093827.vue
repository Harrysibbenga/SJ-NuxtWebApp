<template>
  <v-app dark>
    <HeadNav />
    <v-main class="primary-grad">
      <nuxt />
    </v-main>
    <HomeSubscribe color="secondary" />
    <Foot :partners="partners" />
  </v-app>
</template>

<script>
import { init } from '@/mixins/init'
export default {
  mixins: [init],
}
</script>
