<template>
  <v-container fluid style="margin-bottom: 1000px">
    <h2 class="secondary--text my-5 ml-5 pt-5 text-uppercase">
      {{ calendar.year }} Calendar
    </h2>
    <v-row>
      <v-col
        v-for="(fixture, index) in calendar.fixtures"
        :key="index"
        md="6"
        lg="4"
      >
        <UiCalendarCard :fixture="fixture" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    calendar() {
      return this.$store.getters['calendar/getPosts']
    },
  },
}
</script>
