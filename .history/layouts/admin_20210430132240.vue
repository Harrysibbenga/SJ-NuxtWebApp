<template>
  <v-app light>
    <v-main class="white">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('images/setImages')
    this.$store.dispatch('circuit/setPosts')
    this.$store.dispatch('posts/setPosts')
    this.$store.dispatch('calendar/setPosts')
    this.$store.dispatch('partners/setPosts')
    this.$store.dispatch('partners/setContent')
    this.$store.dispatch('about/setContent')
    this.$store.dispatch('headline/setContent')
  },
}
</script>
