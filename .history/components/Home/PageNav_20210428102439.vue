<template>
  <v-row>
    <v-col v-for="(item, index) in items" :key="index" cols="12" md="6">
      <UiNavCard :item="item" />
    </v-col>
  </v-row>
</template>
