<template>
  <v-dialog 
    top
    position="top"
    full-height
    direction="top"
    :show="editModal"
    size="fluid"
    @close="close"
  >
    <mdb-modal-header>
      <mdb-modal-title>{{ post.content.title }}</mdb-modal-title>
    </mdb-modal-header>
    <mdb-modal-body>
      <PostImageUpload :image.sync="post.image" />
      <PostStandardForm :content.sync="post.content" />
      <PostGallery v-if="gallery == true" :gallery="post.gallery" />
    </mdb-modal-body>
    <mdb-modal-footer>
      <mdb-btn color="secondary" @click.native="cancelEdit">Close</mdb-btn>
      <mdb-btn color="primary" @click.native="saveEdit">Save changes</mdb-btn>
    </mdb-modal-footer>
  </v-dialog>
</template>

<script>
export default {
  props: {
    edit: {
      type: Object,
      default: () => ({}),
    },
    modal: {
      type: Boolean,
      default: false,
    },
    confirmation: {
      type: Boolean,
      default: false,
    },
    gallery: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      updatedPost: {},
    }
  },
  computed: {
    editModal: {
      get() {
        return this.modal
      },
      set(newVal) {
        this.$emit('update:modal', newVal)
      },
    },
    post: {
      get() {
        return this.edit
      },
      set(newVal) {
        this.updatedPost = newVal
      },
    },
  },
  methods: {
    saveEdit() {
      this.$emit('update:confirmation', true)
      this.$emit('update:edit', this.updatedPost)
      this.close()
    },
    cancelEdit() {
      this.$emit('update:confirmation', false)
      this.close()
    },
    close() {
      this.editModal = false
    },
  },
}
</script>
