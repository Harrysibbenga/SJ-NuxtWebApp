<template>
  <v-img
    src="/jelley-star.png"
    alt="Stephen Jelley Star Logo"
    max-height="100"
    max-width="100"
  ></v-img>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '100',
    },
    height: {
      type: String,
      default: '100',
    },
  },
}
</script>
