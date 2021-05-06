<template>
  <v-img
    src="/Stephen-Jelley-Logo.png"
    alt="Stephen Jelley Logo"
    max-height="60"
    max-width="150"
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
