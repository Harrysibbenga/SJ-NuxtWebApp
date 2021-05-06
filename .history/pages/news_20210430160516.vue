<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, index) in news" :key="index" cols="12" md="6">
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
