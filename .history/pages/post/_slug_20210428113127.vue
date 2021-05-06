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
        <v-col col="12">
          <CoolLightBox :items="post.gallery" :index="index" @close="index = null">
          </CoolLightBox>
          <div class="images-wrapper">
            <div
              v-for="(image, imageIndex) in items"
              :key="imageIndex"
              class="image"
              :style="{ backgroundImage: 'url(' + image + ')' }"
              @click="index = imageIndex"
            ></div>
          </div>
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
  created() {
    const slug = this.$route.params.slug
    this.$store.dispatch('posts/setPostSlug', slug).then((data) => {
      this.post = data
    })
  },
  destroyed() {
    this.$store.commit('posts/clearPost')
  },
}
</script>
