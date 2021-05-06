<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, index) in news" :key="index" cols="6" md="4">
        <UiNewsCard :post="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    news() {
      return this.$store.getters['posts/getPosts']
    },
  },
}
</script>
