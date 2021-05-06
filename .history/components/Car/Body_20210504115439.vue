<template>
  <v-row>
    <v-col>
      <div v-html="post.content"></div>
    </v-col>
    <v-col>
        <v-row>
            <v-col cols="6" v-for="(item,index) in post.gallery" :key="index">
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
