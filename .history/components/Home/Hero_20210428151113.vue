<template>
  <v-carousel cycle hide-delimiters show-arrows-on-hover>
    <v-carousel-item v-for="(color, i) in colors" :key="color">
      <v-card>
        <v-img :src="post.url" :alt="post.alt">
          <v-card-text>
            <h1>{{ post.title }}</h1>
          </v-card-text>
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
