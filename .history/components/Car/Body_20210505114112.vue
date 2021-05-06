<template>
  <v-row align="center">
    <v-col cols="12" md="5" lg="6" style="height: inherit" class="py-16">
      <div
        class="secondary mx-auto py-4 table-style"
        style="width: fit-content"
        v-html="post.content"
      ></div>
    </v-col>
    <v-col cols="12" md="7" lg="6">
      <v-row>
        <v-col v-for="(item, index) in post.gallery" :key="index" cols="6">
          <v-img :src="item.url" :alt="item.alt"></v-img>
        </v-col>
      </v-row>
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

<style>
.table-style table tbody td {
  padding: 1.2rem !important;
}
</style>
