<template>
  <div>
    <v-app-bar
      app
      :elevation="24"
      color="#0a1b53"
      dark
      height="80"
      min-width="240"
    >
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>

      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="rightDrawer = !rightDrawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-container fluid absolute>
      <v-row>
        <v-col>
          <v-list-item class="primary" :nuxt="true" to="/">
            <v-list-item-content>
              <v-list-item-title>
                <Logo class="mx-auto mt-2" />
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list>
            <v-list-item :nuxt="true" to="/">
              <v-list-item-icon>
                <v-icon light> mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item :nuxt="true" to="/profile">
              <v-list-item-icon>
                <v-icon light> mdi-newspaper-variant-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item :nuxt="true" to="/news">
              <v-list-item-icon>
                <v-icon light> mdi-newspaper-variant-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>News</v-list-item-title>
            </v-list-item>
            <v-list-item v-if="user" :nuxt="true" to="/admin">
              <v-list-item-icon>
                <v-icon light> mdi-view-dashboard</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rightDrawer: false,
    }
  },
  computed: {
    user() {
      return this.$store.getters['users/user']
    },
  },
}
</script>
