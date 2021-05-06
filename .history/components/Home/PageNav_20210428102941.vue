<template>
  <v-row>
    <v-col v-for="(item, index) in items" :key="index" cols="12" md="6">
      <UiNavCard :item="item" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          url: 'static/jelley-5Z4A0906.png',
          alt: 'test',
          title: 'Profile',
        },
        {
          url: 'static/jelley-5Z4A0906.png',
          alt: 'test',
          title: 'Partners',
        },
      ],
    }
  },
}
</script>
