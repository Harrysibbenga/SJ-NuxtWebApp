<template>
  <v-row align="center">
    <v-col cols="6" class="secondary" style="height: inherit">
      <div
        class="secondary"
        style="width: fit-content"
        v-html="post.content"
      ></div>
    </v-col>
    <v-col cols="6">
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
