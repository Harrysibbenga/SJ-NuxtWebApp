<template>
  <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(color, i) in colors" :key="color">
      <v-sheet :color="color" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">Slide {{ i + 1 }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
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
