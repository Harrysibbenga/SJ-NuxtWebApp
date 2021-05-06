<template>
  <v-row>
    <v-col col="12" class="p-0 text-center">
      <v-card>
        <v-img :src="post.car.url" :alt="post.car.alt" class="img-fluid">
          <v-card-title
            class="text-h5 pa-lg-10 secondary text-lg-h3"
            style="width: fit-content"
          >
            <h1 class="primary--text font-weight-bold">
              {{ post.subtitle }}
            </h1>
          </v-card-title>
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
