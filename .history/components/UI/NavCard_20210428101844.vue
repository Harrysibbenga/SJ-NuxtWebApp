<template>
  <div>
    <v-card>
      <v-img
        :src="item.url"
        :alt="items.alt"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
      >
        <v-card-title>{{ item.title }}</v-card-title>
      </v-img>
    </v-card>
  </div>
</template>
