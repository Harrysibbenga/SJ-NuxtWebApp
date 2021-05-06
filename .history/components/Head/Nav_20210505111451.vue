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

    <v-container
      fluid
      class="position-fixed fill-height nav-container pa-0 primary"
    >
      <v-row class="fill-height position-relative">
        <v-col class="fill-height">
          <v-list class="primary">
            <v-list-item
              v-for="(item, index) in navList"
              :key="index"
              :nuxt="true"
              :to="item.link"
            >
              <v-list-item-title class="white--text text-h4 text-center">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
          </v-list>
          <v-list-item :nuxt="true" to="/">
            <v-list-item-content>
              <v-list-item-title>
                <Logo class="mx-auto mt-2" />
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
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
      navList: [
        {
          link: '/profile',
          title: 'Profile',
        },
        {
          link: '/partners',
          title: 'Partners',
        },
        {
          link: '/car',
          title: 'The Car',
        },
        {
          link: '/news',
          title: 'News',
        },
      ],
    }
  },
  computed: {
    user() {
      return this.$store.getters['users/user']
    },
  },
}
</script>

<style scoped>
.position-fixed {
  position: fixed;
}
.nav {
  top: 0;
  left: 0;
  z-index: 100000;
  width: 100%;
  height: 100vh;
}
</style>
