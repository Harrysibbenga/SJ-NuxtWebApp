<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col col="12" class="p-0 text-center">
          <v-card>
            <v-img :src="post.url" :alt="post.alt" class="img-fluid">
              <v-card-title
                class="text-h5 pa-lg-10 secondary text-lg-h1"
                style="width: fit-content"
              >
                <h1 class="primary--text font-weight-bold">
                  {{ post.title }}
                </h1>
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mx-auto">
      <HomePartners :page="true" />
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    post() {
      return this.$store.getters['partners/getContent']
    },
  },
}
</script>
