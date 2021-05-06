<template>
  <div>
    <v-card>
      <v-img
        :src="item.url"
        :alt="items.alt"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
      >
        <v-card-title v-if="hover" class="text-uppercase">{{
          item.title
        }}</v-card-title>
      </v-img>
    </v-card>
  </div>
</template>
