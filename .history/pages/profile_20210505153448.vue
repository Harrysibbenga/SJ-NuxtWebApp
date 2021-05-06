<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col col="12" class="p-0 text-center">
          <v-card>
            <v-img :src="post.url" :alt="post.alt" class="img-fluid">
              <v-card-title
                class="text-h5 pa-lg-10 secondary text-lg-h3 ma-10"
                style="width: fit-content"
              >
                <h1 class="primary--text font-weight-bold">
                  {{ post.title }}
                </h1>
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Icon class="mx-auto mt-n14" />

    <v-container>
      <v-row align="center">
        <v-col
          cols="auto"
          md="6"
          class="white--text mx-auto d-flex justify-center tablestyle"
        >
          <div class="py-10" v-html="post.bio.content"></div>
        </v-col>
        <v-col cols="12" md="6" class="pr-8">
          <v-img :src="post.bio.url" :alt="post.bio.alt"></v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col col="12" class="pt-2 white--text">
          <div class="py-5" v-html="post.content"></div>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row class="white--text">
        <h3 class="text-h6">Career highlights:</h3>
        <v-col cols="12" class="white--text">
          <div class="py-5 table-style" v-html="post.career.content"></div>
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

<style>
.table-style table tbody td {
  padding: 0.3rem !important;
}
</style>
