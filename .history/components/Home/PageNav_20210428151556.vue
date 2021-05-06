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
    items() {
      const items = [
        {
          url: this.profile.url,
          alt: this.profile.alt,
          title: this.profile.title,
          link: '/profile',
        },
        {
          url: 'jelley-5Z4A0906.png',
          alt: 'test',
          title: 'Partners',
          link: '',
        },
      ]
      return items
    },
  },
}
</script>
