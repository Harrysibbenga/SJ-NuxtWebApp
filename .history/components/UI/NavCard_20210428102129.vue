<template>
  <div>
    <v-card>
      <v-img
        :src="item.url"
        :alt="items.alt"
        :class="{ 'secondary-overlay': hover }"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
      >
        <transition name="fade">
          <v-card-title v-if="hover" class="ptimary text-uppercase">{{
            item.title
          }}</v-card-title>
        </transition>
      </v-img>
    </v-card>
  </div>
</template>
