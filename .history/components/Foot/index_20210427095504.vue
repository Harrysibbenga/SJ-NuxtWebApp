<template>
  <v-footer color="primary" dark>
    <v-container fluid class="mt-5">
      <!-- partners -->
      <v-row class="py-5">
        <HomePartners :partners="partners" />
      </v-row>
      <v-row>
        <!-- about -->
        <v-col cols="12" md="4">
          <h3 class="font-weight-bold">About:</h3>
          <p>
            Stephen Jelley is a professional racing driver competing in the
            British Touring Car Championship (BTCC) in a BMW 3-Series with West
            Surrey Racing. He is a race winner and has an impressive CV, having
            previously races in British F3, GP2 and the Porsche Carrera Cup GB.
          </p>
        </v-col>
        <!-- social -->
        <v-col class="text-center my-auto" cols="12" md="4">
          <v-icon light color="secondary" x-large> mdi-facebook</v-icon>
          <v-icon light color="secondary" x-large class="mx-5">
            mdi-twitter</v-icon
          >
          <v-icon light color="secondary" x-large> mdi-instagram</v-icon>
        </v-col>
        <!-- media contact -->
        <v-col class="my-auto text-left pt-5" cols="12" md="4">
          <v-row>
            <v-col>
              <h3 class="font-weight-bold">Media Contact:</h3>
              <p class="ma-0">Tom Baker</p>
              <p class="ma-0">Torque Motorsport Limited</p>
              <p class="ma-0">tom@torque.racing</p>
              <p class="ma-0">07974 779657</p>
              <p class="ma-0">01327 850500</p>
            </v-col>

            <v-col>
              <h3 class="font-weight-bold">Useful Links:</h3>
              <a href="wsr-racing.com" target="_blank">wsr-racing.com</a
              >
              <a href="shop.bmw.com" target="_blank">shop.bmw.com</a
              ><a href="btcc.net" target="_blank">btcc.net</a
              >
               btcc.net
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <span
            >&copy; Torque Motorsport Limited
            {{ new Date().getFullYear() }}</span
          >
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  props: {
    partners: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
