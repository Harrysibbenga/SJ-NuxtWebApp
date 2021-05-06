<template>
  <section id="posts">
    <mdb-container id="posts-nav">
      <mdb-tab pills justify color="primary">
        <mdb-tab-item>
          <NuxtLink to="/admin/posts/news"> News </NuxtLink>
        </mdb-tab-item>
        <mdb-tab-item>
          <NuxtLink to="/admin/posts/timeline"> Timeline </NuxtLink>
        </mdb-tab-item>
      </mdb-tab>
    </mdb-container>

    <NuxtChild class="pt-3"></NuxtChild>
  </section>
</template>

<script>
export default {
  name: 'PostsNav',
  components: {
    mdbContainer,
    mdbTab,
    mdbTabItem,
  },
}
</script>
