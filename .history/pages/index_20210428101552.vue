<template>
  <v-container fluid class="pa-0">
    <HomeHero />
    <HomePageNav />
    <HomePartners :slider="true" :partners="partners" />
    <HomeCalendar />
    <HomeSocial />
  </v-container>
</template>

<script>
export default {
  computed: {
    partners() {
      return this.$store.getters['partners/getPosts']
    },
  },
}
</script>
