<template>
  <v-carousel cycle hide-delimiters show-arrows-on-hover>
    <v-carousel-item v-for="(color, i) in colors" :key="color">
      <v-card>
        <v-img :src="img.url" :alt="img.alt">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">Slide {{ i + 1 }}</div>
          </v-row>
        </v-img>
      </v-card>
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
