<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col col="12" class="p-0 text-center">
          <v-card>
            <v-img :src="page.url" :alt="page.alt" class="img-fluid">
              <v-card-title
                class="text-h5 pa-lg-10 secondary text-lg-h3 ma-10"
                style="width: fit-content"
              >
                <h1 class="primary--text font-weight-bold">
                  {{ page.title }}
                </h1>
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Icon class="mx-auto mt-n13" />
    <v-container fluid class="px-lg-16">
      <v-row>
        <v-col v-for="(item, index) in news" :key="index" cols="12" lg="6" xl="4">
          <UiNewsCard :post="item" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    news() {
      return this.$store.getters['posts/getPosts']
    },
    page() {
      return this.$store.getters['posts/getContent']
    },
  },
}
</script>
