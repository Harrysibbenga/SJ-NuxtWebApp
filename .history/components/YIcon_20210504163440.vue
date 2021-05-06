<template>
  <v-img
    src="/jelley-star.png"
    alt="Stephen Jelley Star Logo"
    :max-height="height"
    :max-width="width"
  ></v-img>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 100,
    },
    height: {
      type: Number,
      default: 100,
    },
  },
}
</script>
