<template>
  <div>
    <v-row v-for="(quote, index) in quotes" :key="index">
      <v-col cols="12">
        <v-text-field></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>
