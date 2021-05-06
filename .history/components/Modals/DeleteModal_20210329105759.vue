<template>
  <v-dialog v-model="deleteModal" max-width="500px" @close="close">
    <v-card>
      <v-card-title> Delete confirm </v-card-title>
      <v-card-text>
        <span class="error--text"
          >Are you sure you want to permanently delete -
        </span>
        {{ item.title }}
      </v-card-text>
      <v-btn color="primary" @click.native="cancel">Cancel</v-btn>
      <v-btn color="error" @click.native="confirm">Delete</v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    confirmation: {
      type: Boolean,
      default: false,
    },
    modal: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    deleteModal: {
      get() {
        return this.modal
      },
      set(newVal) {
        this.$emit('update:modal', newVal)
      },
    },
  },
  methods: {
    confirm() {
      this.$emit('update:confirmation', true)
      this.close()
    },
    cancel() {
      this.$emit('update:confirmation', false)
      this.close()
    },
    close() {
      this.deleteModal = false
    },
  },
}
</script>
