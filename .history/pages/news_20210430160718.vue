<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col col="12" class="p-0 text-center">
          <v-card>
            <v-img :src="page.url" :alt="page.alt" class="img-fluid">
              <v-card-title
                class="text-h5 pa-lg-10 secondary text-lg-h1"
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
    <v-container>
      <v-row>
        <v-col v-for="(item, index) in news" :key="index" cols="6" md="4">
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
