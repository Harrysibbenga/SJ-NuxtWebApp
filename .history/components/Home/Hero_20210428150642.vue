<template>
  <v-img :src="headline.url" :alt="headline.alt"> </v-img>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.getters['posts/getPosts']
    },
  },
}
</script>
