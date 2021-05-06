<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col col="12" class="p-0 text-center">
          <v-card>
            <v-img :src="post.url" :alt="post.alt" class="img-fluid">
              <v-card-title>
                <h1 class="primary--text secondary font-weight-bold">
                  {{ post.title }}
                </h1>
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row class="pl-5">
        <v-col col="12" class="pt-2 white--text">
          <div class="py-5" v-html="post.content"></div>
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
    post() {
      return this.$store.getters['about/getAbout']
    },
  },
}
</script>
