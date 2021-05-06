<template>
  <v-img
    src="/Stephen-Jelley-Logo.png"
    alt="Stephen Jelley Logo"
    :max-height="height"
    :max-width="width"
  ></v-img>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 60,
    },
    height: {
      type: Number,
      default: 150,
    },
  },
}
</script>
