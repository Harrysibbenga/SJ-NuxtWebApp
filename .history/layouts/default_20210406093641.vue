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
export default {
  mixins: ['init'],
}
</script>
