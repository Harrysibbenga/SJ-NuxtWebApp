<template>
  <v-img :src="headline.url" :alt="headline.alt"> </v-img>
</template>

<script>
export default {
  computed: {
    headline() {
      return this.$store.getters['headline/getHeadline']
    },
  },
}
</script>
