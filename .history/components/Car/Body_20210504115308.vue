<template>
  <v-row>
    <v-col>
      <div v-html="post.content"></div>
    </v-col>
    <v-col>

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
