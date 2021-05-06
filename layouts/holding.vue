<template>
  <v-app class="background-color">
    <v-main>
      <v-container style="width: 100%; height: 100%">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="css" scoped>
.background-color {
  background-color: #0a1b53;
  background-image: radial-gradient(#0a1b53af 1%, #0e2572 20%, #0a1b53 50%);
}
</style>
