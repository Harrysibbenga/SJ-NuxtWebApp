<template>
  <v-container>
    <v-row v-if="items.length > 0" class="no-gutters">
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
    car() {
      return this.$store.getters['car/getContent']
    },
    items() {
      const items = [
        {
          url: this.profile.url,
          alt: this.profile.alt,
          title: this.profile.title,
          link: '/profile',
          href: false,
        },
        {
          url: this.partner.url,
          alt: this.partner.alt,
          title: this.partner.title,
          link: '/partners',
          href: false,
        },
        {
          url: this.partner.url,
          alt: this.partner.alt,
          title: 'Car',
          link: '/partners',
          href: false,
        },
        {
          url: this.shop.url,
          alt: this.shop.alt,
          title: this.shop.title,
          link: this.shop.link,
          href: true,
        },
      ]
      return items
    },
  },
}
</script>
