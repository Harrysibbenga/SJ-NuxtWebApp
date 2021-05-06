<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, index) in items" :key="index" cols="12" md="6">
        <UiNavCard :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    profile() {
      return this.$store.getters['about/getAbout']
    },
    partner() {
      return this.$store.getters['partners/getContent']
    },
    shop() {
      return this.$store.getters['shop/getContent']
    },
    items() {
      const items = [
        {
          url: this.profile.url,
          alt: this.profile.alt,
          title: this.profile.title,
          link: '/profile',
        },
        {
          url: this.partner.url,
          alt: this.partner.alt,
          title: this.partner.title,
          link: '/partners',
        },
        {
          url: this.partner.url,
          alt: this.partner.alt,
          title: 'Car',
          link: '/partners',
        },
        {
          url: this.shop.url,
          alt: this.shop.alt,
          title: this.shop.title,
          link: this.shop.link,
        },
      ]
      return items
    },
  },
}
</script>
