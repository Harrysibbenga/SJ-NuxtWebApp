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
  computed: {
    partners() {
      return this.$store.getters['partners/getPosts']
    },
  },
  mounted() {
    this.$store.dispatch('images/setImages')
    this.$store.dispatch('circuit/setPosts')
    this.$store.dispatch('posts/setPosts')
    this.$store.dispatch('posts/setContent')
    this.$store.dispatch('car/setContent')
    this.$store.dispatch('calendar/setPosts')
    this.$store.dispatch('partners/setPosts')
    this.$store.dispatch('partners/setContent')
    this.$store.dispatch('about/setContent')
    this.$store.dispatch('shop/setContent')
    this.$store.dispatch('headline/setContent')
  },
}
</script>
