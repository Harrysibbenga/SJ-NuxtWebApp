<template>
  <section id="posts">
    <v-container id="posts-nav">
      <v-tabs color="primary">
        <v-tab to="/admin/posts/news" nuxt="true"> News </v-tab>
        <v-tab to="/admin/posts/timeline" nuxt="true"> Timeline </v-tab>
      </v-tabs>
    </v-container>

    <NuxtChild class="pt-3"></NuxtChild>
  </section>
</template>

<script>
export default {
  name: 'PostsNav',
}
</script>
