<template>
  <v-carousel
    cycle
    hide-delimiters
    show-arrows-on-hover
    height="auto"
    @change="setIndex($event)"
  >
    <v-carousel-item v-for="(post, i) in posts" :key="i">
      <v-card>
        <v-img :src="post.url" :alt="post.alt">
          <v-row>
            <v-col cols="8" lg="4" xl="3" class="pa-10">
              <v-card-text>
                <h1 class="text-h3 secondary primary--text font-weight-medium">
                  {{ post.title }}
                </h1>
              </v-card-text>
              <v-card-subtitle>
                <v-btn
                  :nuxt="true"
                  :to="{ name: 'post-slug', params: { slug: post.slug } }"
                  class="secondary primary--text font-weight-medium"
                  small
                >
                  Click for more
                </v-btn>
              </v-card-subtitle>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
    </v-carousel-item>
    <v-row class="mb-16 mt-n16">
      <v-col class="ml-16">
        <v-btn
          :nuxt="true"
          to="/news"
          class="mt-n16 secondary primary--text font-weight-medium"
          large
        >
          Click for acheive
        </v-btn>
      </v-col>

      <v-col class="text-right mr-16 mx-16">
        <v-row align="start">
          <v-col v-for="n in posts.length" :key="n">
            <Icon v-if="index === n" :id="n" :width="50" :length="50" />
            <YIcon v-else :id="n" :width="50" :length="50" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
    }
  },
  computed: {
    posts() {
      return this.$store.getters['posts/getPosts']
    },
  },
  methods: {
    setIndex(index) {
      this.index = index + 1
      console.log(index)
    },
  },
}
</script>
