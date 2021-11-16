<template>
  <section id="media">
    <v-container id="media-nav">
      <v-tabs center-active color="primary" class="mt-4 mx-4">
        <v-tab to="/admin/media/partners"> Partners </v-tab>
        <v-tab to="/admin/media/circuits"> Circuits </v-tab>
        <v-tab to="/admin/media/images"> Images </v-tab>
      </v-tabs>
    </v-container>

    <nuxt-child class="pt-3" />
  </section>
</template>
