<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col col="12" class="p-0 text-center">
          <v-card class="secondary">
            <v-img :src="post.url" :alt="post.alt">
              <v-row class="d-none d-md-block">
                <v-col cols="8" lg="4" class="pa-10">
                  <v-card-text>
                    <h1
                      class="text-h3 secondary primary--text font-weight-medium"
                    >
                      {{ post.title }}
                    </h1>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-img>
            <v-card-text class="d-md-none">
              <h1
                class="text-h5 text-sm-h4 secondary primary--text font-weight-medium"
              >
                {{ post.title }}
              </h1>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="px-5">
        <v-col col="12" class="pt-2 white--text">
          <h2 class="date">{{ post.date | fullDate }}</h2>
          <div class="py-5 text-justify" v-html="post.content"></div>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row class="m-0">
        <v-col
          v-for="(src, index) in post.gallery"
          :key="index"
          cols="6"
          md="4"
          @click="() => showImg(index)"
        >
          <v-img :src="src.url" :alt="src.alt"></v-img>
        </v-col>
        <client-only>
          <vue-easy-lightbox
            :visible="visible"
            :imgs="images"
            :index="imgIndex"
            @hide="handleHide"
          ></vue-easy-lightbox>
        </client-only>
      </v-row>
    </v-container>

    <v-container>
      <v-row class="px-5">
        <v-col
          v-for="(content, index) in post.quotes"
          :key="index"
          cols="12"
          class="secondary--text"
        >
          <h2>{{ content.name }}</h2>
          <div class="py-5 text-justify" v-html="content.content"></div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { filter } from '@/mixins/filter'

export default {
  name: 'Post',
  mixins: [filter],
  data() {
    return {
      slug: '',
      post: {},
      imgIndex: 0,
      visible: false,
      images: [],
    }
  },
  async fetch({ store, route }) {
    this.slug = route.params.slug
    await store.dispatch('posts/setPostSlug', this.slug)
  },
  head() {
    const post = this.store.getters['posts/getPost']
    return {
      title: post.title,
      meta: [
        {
          hid: 't-type',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 't-type',
          name: 'twitter:site',
          content: '@parkerclassicworks',
        },
        {
          hid: 'og-title',
          property: 'og:title',
          content: post.title,
        },
        {
          hid: 'og-desc',
          property: 'og:description',
          content: post.excerpt,
        },
        {
          hid: 'og-url',
          property: 'og:url',
          content: 'https://stephenjelley.com/post/' + this.slug,
        },
        {
          hid: 'og-image',
          property: 'og:image',
          content: post.url,
        },
        {
          hid: 'og-site_name',
          property: 'og:site_name',
          content: 'Stephen Jelley | Official Website',
        },
        { hid: 'og-type', property: 'og:type', content: 'post' },
        { name: 'robots', content: 'index,follow' },
        {
          hid: 'description',
          name: 'description',
          content: post.excerpt,
        },
      ],
    }
  },
  created() {
    this.$store.dispatch('posts/setPostSlug', this.slug).then((data) => {
      this.post = data
      data.gallery.forEach((img) => {
        this.images.push(img.url)
      })
    })
  },
  destroyed() {
    this.$store.commit('posts/clearPost')
  },
  methods: {
    showImg(index) {
      this.imgIndex = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
  },
}
</script>
