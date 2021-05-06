<template>
  <v-carousel
    cycle
    hide-delimiters
    show-arrows-on-hover
    height="auto"
    class="position-relative"
    @change="setIndex($event)"
  >
    <v-carousel-item v-for="(post, i) in posts" :key="i">
      <v-card class="transparent">
        <v-img :src="post.url" :alt="post.alt">
          <v-row class="d-none d-md-block">
            <v-col md="8" lg="4" xl="3" class="pa-10">
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
        <v-card-text class="d-md-none">
          <h1 class="text-h6 secondary primary--text font-weight-medium">
            {{ post.title }}
          </h1>
        </v-card-text>
        <v-card-subtitle class="d-md-none">
          <v-btn
            :nuxt="true"
            :to="{ name: 'post-slug', params: { slug: post.slug } }"
            class="secondary primary--text font-weight-medium"
            small
          >
            Click for more
          </v-btn>
        </v-card-subtitle>
      </v-card>
    </v-carousel-item>
    <v-row class="position-absolute hero-nav align-content-md-end">
      <v-col class="ml-16">
        <v-btn
          :nuxt="true"
          to="/news"
          class="secondary primary--text font-weight-medium"
          large
        >
          Click for news
        </v-btn>
      </v-col>

      <v-col class="text-right mr-16 mx-16">
        <v-row align="end" justify="end" no-gutters>
          <div v-for="n in posts.length" :key="n">
            <Icon v-if="index === n" :id="n" :width="iconSize" :length="iconSize" />
            <YIcon v-else :id="n" :width="iconSize" :length="iconSize" />
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-carousel>
</template>

<script>
import { truncate } from '@/mixins/truncate'

export default {
  mixins: [truncate],
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

<style>
.hero-nav {
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
}
</style>
