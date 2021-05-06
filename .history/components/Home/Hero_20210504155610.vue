<template>
  <v-carousel cycle hide-delimiters show-arrows-on-hover height="auto">
    <v-carousel-item v-for="(post, i) in posts" :key="i">
      <v-card>
        <v-img :src="post.url" :alt="post.alt">
          <v-row>
            <v-col cols="6" lg="4" xl="3" class="pa-10">
              <v-card-text>
                <h1 class="text-h3 secondary primary--text font-weight-medium">
                  {{ post.title }}
                </h1>
              </v-card-text>
              <v-subtitle>
                <v-btn
                  :nuxt="true"
                  :to="{ name: 'post-slug', params: { slug: post.slug } }"
                  class="ml-4 text-h3 secondary primary--text font-weight-medium"
                >
                  Click for more
                </v-btn>
              </v-subtitle>
            </v-col>
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
