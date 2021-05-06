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
          <v-card-title
            v-if="hover"
            class="primary text--secondary text-uppercase"
            >{{ item.title }}</v-card-title
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
      hover: true,
    }
  },
}
</script>
