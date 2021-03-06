export const pagination = {
  computed: {
    partners() {
      return this.$store.getters['partners/getPosts']
    },
  },
  mounted() {
    this.$store.dispatch('images/setImages')
    this.$store.dispatch('circuit/setPosts')
    this.$store.dispatch('posts/setPosts')
    this.$store.dispatch('calendar/setPosts')
    this.$store.dispatch('partners/setPosts')
    this.$store.dispatch('about/setContent')
    this.$store.dispatch('headline/setContent')
  },
}
