<template>
  <v-container fluid class="pa-0">
    <HomeHero />
    <Icon class="mx-auto margin mt-10" />
    <HomePageNav />
    <HomePartners :slider="true" />
    <HomeCalendar />
    <HomeSocial />
  </v-container>
</template>

<style scoped>
.margin {
  margin-top: -90px;
}
</style>
