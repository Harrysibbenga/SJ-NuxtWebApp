<template>
  <div>
    <v-card>
      <v-img
        :src="item.url"
        :alt="item.alt"
        :class="{ 'secondary-overlay': hover }"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
      >
        <transition name="fade">
          <v-card-title v-if="hover"
            ><h2
              class="secondary primary--text text-uppercase text-h1 font-weight-bold pa-3"
            >
              {{ item.title }}
            </h2></v-card-title
          >
        </transition>
      </v-img>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      hover: false,
    }
  },
}
</script>

<style>
  .secondary-overlay {
    background: ;
  }
</style>