<template>
  <v-dialog
    v-model="editModal"
    fullscreen
    transition="dialog-bottom-transition"
  >
    <v-card v-if="type == ''">
      <v-card-title>{{ post.content.title }}</v-card-title>
      <v-card-text>
        <PostImageUpload :image.sync="post.image" :type="'image'" />
        <PostStandardForm class="mt-5" :content.sync="post.content" />
        <PostQuotes :quotes.sync="post.quotes" />
        <PostGallery :gallery="post.gallery" />
      </v-card-text>
      <v-card-actions>
        <v-btn color="error" @click.native="cancelEdit">Close</v-btn>
        <v-btn color="primary" @click.native="saveEdit">Save changes</v-btn>
      </v-card-actions>
    </v-card>

    <v-card v-if="type == 'partner'">
      <v-card-title>{{ post.content.title }}</v-card-title>
      <v-card-text>
        <PostImageUpload :image.sync="post.image" :type="'partner'" />
        <PostStandardForm class="mt-5" :content.sync="post.content" />
      </v-card-text>
      <v-card-actions>
        <v-btn color="error" @click.native="cancelEdit">Close</v-btn>
        <v-btn color="primary" @click.native="saveEdit">Save changes</v-btn>
      </v-card-actions>
    </v-card>

    <v-card v-if="type == 'circuit'">
      <v-card-title>{{ post.content.track }}</v-card-title>
      <v-card-text>
        <PostImageUpload :image.sync="edit.image" :type="'circuit'" />
        <PostStandardForm class="mt-5" :content.sync="edit.content" />
      </v-card-text>
      <v-card-actions>
        <v-btn color="error" @click.native="cancelEdit">Close</v-btn>
        <v-btn color="primary" @click.native="saveEdit">Save changes</v-btn>
      </v-card-actions>
    </v-card>

    <v-card v-if="type == 'fixture'">
      <PostImageUpload :image.sync="edit.image" :type="'circuit'" />
      <v-card-title>{{ post.content.date }}</v-card-title>
      <v-card-text>
        <v-card v-if="post.track" :max-width="500" tile dense>
          <v-img
            :src="post.track.url"
            :alt="post.track.alt"
            :max-width="500"
          ></v-img>
          <v-card-title>Track name: {{ post.track.track }}</v-card-title>
          <v-card-subtitle>Length: {{ post.track.length }} mi</v-card-subtitle>
        </v-card>
        <ModalSelectModal :items="tracks" :item.sync="post.track" />
        <PostStandardForm class="mt-5" :content.sync="post.content" />
      </v-card-text>
      <v-card-actions>
        <v-btn color="error" @click.native="cancelEdit">Close</v-btn>
        <v-btn color="primary" @click.native="saveEdit">Save changes</v-btn>
      </v-card-actions>
    </v-card>
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
    tracks() {
      return this.$store.getters['circuit/getPosts']
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
