<template>
  <v-carousel
    v-model="slide"
    cycle
    hide-delimiters
    show-arrows-on-hover
    height="fit-content"
    class="position-relative height"
  >
    <v-carousel-item v-for="(post, i) in posts" :key="i">
      <v-card class="secondary">
        <v-img :src="post.url" :alt="post.alt">
          <v-row class="d-none d-md-block">
            <v-col md="8" lg="4" class="pa-10">
              <h1 class="text-h3 secondary primary--text font-weight-medium">
                {{ post.title }}
              </h1>
              <v-btn
                :nuxt="true"
                :to="{ name: 'post-slug', params: { slug: post.slug } }"
                class="secondary primary--text font-weight-medium mt-9"
                small
              >
                Click for more
              </v-btn>
            </v-col>
          </v-row>
        </v-img>
        <v-card-text style="min-height: 200px" class="d-md-none text-center">
          <h1
            class="text-h5 text-sm-h4 secondary primary--text font-weight-medium"
          >
            {{ post.title }}
          </h1>
          <v-btn
            :nuxt="true"
            :to="{ name: 'post-slug', params: { slug: post.slug } }"
            class="secondary primary--text font-weight-medium mt-6"
            small
          >
            Click for more
          </v-btn>
        </v-card-text>
      </v-card>
    </v-carousel-item>
    <v-row
      class="position-absolute hero-nav d-none d-md-flex align-content-md-end mb-md-10"
    >
      <v-col class="ml-16">
        <v-btn
          :nuxt="true"
          to="/news"
          class="secondary primary--text font-weight-medium"
        >
          Click for news
        </v-btn>
      </v-col>

      <v-col class="text-right mr-16 mx-16">
        <v-row align="end" justify="end" no-gutters>
          <div
            v-for="n in posts.length"
            :key="n"
            class="pl-md-2"
            @click="moveTo(n)"
          >
            <Icon
              v-if="slide === n - 1"
              :id="n"
              :width="iconSize"
              :length="iconSize"
            />
            <YIcon v-else :id="n" :width="iconSize" :length="iconSize" />
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-carousel>
</template>

<script>
import { truncate } from '@/mixins/truncate'
import _ from 'lodash'

export default {
  mixins: [truncate],
  data() {
    return {
      index: 0,
      iconSize: 25,
      slide: 0,
    }
  },
  computed: {
    posts() {
      const posts = _.cloneDeep(this.$store.getters['posts/getPosts'])

      return posts.splice(0, 3)
    },
  },
  methods: {
    moveTo(n) {
      this.slide = n - 1
    },
  },
}
</script>

<style>
.hero-nav {
  bottom: 0;
  left: 0;
  width: 100%;
}
.height {
  min-height: 500;
}

.z-index {
  z-index: 10;
}
</style>
