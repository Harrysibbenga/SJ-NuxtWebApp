<template>
  <v-container fluid>
    <v-row v-if="slider">
      <h2 class="secondary--text my-5 ml-5 pt-5 pl-3 text-uppercase">
        Partners
      </h2>
      <hooper :settings="hooperSettings" class="my-auto">
        <slide
          v-for="(partner, index) in partners"
          :key="index"
          :index="index"
          class="mt-16 ma-auto"
        >
          <nuxt-link to="/partners">
            <v-img
              :src="partner.url"
              :alt="partner.alt"
              class="img ma-auto"
            ></v-img>
          </nuxt-link>
        </slide>
      </hooper>
    </v-row>
    <v-row v-if="stationary">
      <v-col
        v-for="(partner, index) in partners"
        :key="index"
        :index="index"
        class="my-auto"
      >
        <a :href="partner.link" target="_blank">
          <v-img
            :src="partner.url"
            :alt="partner.alt"
            class="img mx-auto"
          ></v-img>
        </a>
      </v-col>
    </v-row>
    <v-container fluid v-if="page">
      <v-col
        v-for="(partner, index) in partners"
        :key="index"
        :index="index"
        class="mx-auto pa-16"
        cols="6"
        md="4"
      >
        <a :href="partner.link" target="_blank">
          <v-img
            :src="partner.url"
            :alt="partner.alt"
            class="img mx-auto"
          ></v-img>
        </a>
      </v-col>
    </v-container>
  </v-container>
</template>

<script>
import { Hooper, Slide } from 'hooper'

export default {
  name: 'Partner',
  components: {
    Hooper,
    Slide,
  },
  props: {
    slider: {
      type: Boolean,
      default: false,
    },
    page: {
      type: Boolean,
      default: false,
    },
    stationary: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 6,
        infiniteScroll: true,
        autoPlay: true,
        wheelControl: false,
        breakpoints: {
          300: {
            itemsToShow: 2.5,
          },
          600: {
            itemsToShow: 3.5,
          },
          960: {
            itemsToShow: 4.5,
          },
          1264: {
            itemsToShow: 6.5,
          },
        },
      },
    }
  },
  computed: {
    partners() {
      return this.$store.getters['partners/getPosts']
    },
  },
}
</script>

<style scoped>
.img {
  max-width: 150px;
  height: auto;
  object-fit: cover;
}
</style>
