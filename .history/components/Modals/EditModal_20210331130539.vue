<template>
  <v-dialog
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    :show="editModal"
    @close="close"
  >
    <v-card v-if="type == ''">
      <v-card-title>{{ post.content.title }}</v-card-title>
      <v-card-text>
        <PostImageUpload :image.sync="post.image" :type="'image'" />
        <PostStandardForm :content.sync="post.content" />
        <PostQuotes v-if="quote == true" :quotes.sync="post.quotes" />
        <PostGallery v-if="gallery == true" :gallery="post.gallery" />
      </v-card-text>
    </v-card>

    <v-card v-if="type == 'circuit'">
      <v-card-title>{{ post.content.track }}</v-card-title>
      <v-card-text>
        <PostImageUpload :image.sync="post.image" :type="'circuit'" />
        <PostStandardForm :content.sync="post.content" />
      </v-card-text>
    </v-card>

    <v-card v-if="type == 'fixture'">
      <v-card-title>{{ post.content.date }}</v-card-title>
      <v-card-text>
        <ModalSelectModal :items="tracks" :item.sync="post.track" />
        <PostStandardForm :content.sync="post.content" />
      </v-card-text>
    </v-card>
    <v-card-actions>
      <v-btn color="error" @click.native="cancelEdit">Close</v-btn>
      <v-btn color="primary" @click.native="saveEdit">Save changes</v-btn>
    </v-card-actions>
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
      default: false,
    },
    quote: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
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
