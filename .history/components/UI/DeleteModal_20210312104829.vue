<template>
  <mdb-modal
    frame
    position="top"
    direction="top"
    :show="deleteModal"
    @close="close"
  >
    <mdb-modal-body class="text-center text-dark">
      <span class="text-danger">Are you sure you want to delete ?</span>
      {{ item.title }}
      <mdb-btn color="secondary" @click.native="cancel">Cancel</mdb-btn>
      <mdb-btn color="danger" @click.native="confirm">Delete</mdb-btn>
    </mdb-modal-body>
  </mdb-modal>
</template>

<script>
import { mdbModal, mdbModalBody, mdbBtn } from 'mdbvue'

export default {
  components: {
    mdbModal,
    mdbModalBody,
    mdbBtn,
  },
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
