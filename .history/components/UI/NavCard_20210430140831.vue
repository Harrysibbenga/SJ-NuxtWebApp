<template>
  <div>
    <nuxt-link v-if="!href" :to="item.link">
      <v-card>
        <v-img
          :src="item.url"
          :alt="item.alt"
          class="position-relative"
          @mouseenter="hover = true"
          @mouseleave="hover = false"
        >
          <transition name="fade">
            <v-card-title v-if="hover" class="secondary-overlay"
              ><h2
                class="secondary primary--text text-uppercase text-h1 font-weight-bold pa-3"
              >
                {{ item.title }}
              </h2></v-card-title
            >
          </transition>
        </v-img>
      </v-card>
    </nuxt-link>
    <a :href="item.link">
      <v-card>
        <v-img
          :src="item.url"
          :alt="item.alt"
          class="position-relative"
          @mouseenter="hover = true"
          @mouseleave="hover = false"
        >
          <transition name="fade">
            <v-card-title v-if="hover" class="secondary-overlay"
              ><h2
                class="secondary primary--text text-uppercase text-h1 font-weight-bold pa-3"
              >
                {{ item.title }}
              </h2></v-card-title
            >
          </transition>
        </v-img>
      </v-card>
    </a>
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
  background-color: rgba(187, 190, 4, 0.404);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
}

.position-relative {
  position: relative;
}
</style>
