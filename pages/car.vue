<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col col="12" class="p-0 text-center">
          <v-card>
            <v-img
              :src="post.url"
              :alt="post.alt"
              class="img-fluid"
              :min-height="500"
            >
              <v-card-title
                class="text-h6 pa-lg-10 secondary text-lg-h3 ma-5"
                style="width: fit-content"
              >
                <h1 class="primary--text font-weight-bold text-uppercase">
                  {{ post.title }}
                </h1>
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Icon class="mx-auto mt-n13" />
    <v-container fluid class="px-lg-16">
      <CarHead :post="post" />
    </v-container>
    <v-container>
      <CarBody :post="post" />
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    post() {
      return this.$store.getters['car/getContent']
    },
  },
}
</script>
