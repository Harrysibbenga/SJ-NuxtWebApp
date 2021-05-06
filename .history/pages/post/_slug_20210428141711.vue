<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col col="12" class="p-0 text-center">
          <img :src="post.url" :alt="post.alt" class="img-fluid" />
        </v-col>
      </v-row>
      <v-row class="pl-5">
        <v-col col="12" class="pt-2 white--text">
          <h2 class="date">{{ post.date | fullDate }}</h2>
          <div class="py-5" v-html="post.content"></div>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col
          v-for="(content, index) in post.quotes"
          :key="index"
          cols="12"
          class="secondary--text"
        >
          <h2>{{ content.name }}</h2>
          <div class="py-5" v-html="content.content"></div>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row class="m-0">
        <v-col
          v-for="(src, index) in post.gallery"
          :key="index"
          cols="6"
          md="4"
          col="12"
          class="pic"
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
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          property: 'og:title',
          content: this.post.title,
        },
        {
          property: 'og:description',
          content: this.post.excerpt,
        },
        {
          property: 'og:url',
          content: 'https://stephenjelley.com/' + this.slug,
        },
        {
          property: 'og:image',
          content: this.post.url,
        },
        {
          property: 'og:site_name',
          content: 'Stephen Jelley | Official Website',
        },
        { property: 'og:type', content: 'post' },
        { name: 'robots', content: 'index,follow' },
        {
          hid: 'description',
          name: 'description',
          content: this.post.excerpt,
        },
      ],
    }
  },
  computed: {
    images() {
      const imgs = []
      this.post.gallery.forEach((img) => {
        imgs.push(img.url)
      })
      return imgs
    },
  },
  created() {
    const slug = this.$route.params.slug
    this.$store.dispatch('posts/setPostSlug', slug).then((data) => {
      this.post = data
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
