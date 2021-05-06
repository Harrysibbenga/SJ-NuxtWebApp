<template>
  <v-carousel cycle hide-delimiters show-arrows-on-hover>
    <v-carousel-item v-for="(post, i) in posts" :key="i">
      <v-card>
        <v-img :src="post.url" :alt="post.alt">
          <v-card-text>
            <h1 class="text-h3 secondary primary--text">{{ post.title }}</h1>
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
