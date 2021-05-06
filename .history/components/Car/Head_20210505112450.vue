<template>
  <v-row>
    <v-col col="12" class="p-0 text-center">
      <v-card class="transparent">
        <v-card-title
          class="text-h4 secondary ma-6 mb-16 mt-0"
          style="max-width: 600px"
        >
          <h4 class="primary--text font-weight-bold">
            {{ post.subtitle }}
          </h4>
        </v-card-title>
        <v-img :src="post.car.url" :alt="post.car.alt" class="img-fluid">
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
