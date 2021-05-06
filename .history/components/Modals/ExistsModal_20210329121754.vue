<template>
  <v-dialog v-model="exist" persistent>
    <v-card-title class="pa-0">
      <v-toolbar flat dark color="primary">
        <v-toolbar-title>Image exists with that name</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card-title>
    <mdb-modal-body>
      <div class="row col-12 col-md-6 col-lg-4 py-3">
        <p>Would you like to use this one ?</p>
      </div>
      <img :src="image.url" :alt="image.alt" class="img-fluid" />
    </mdb-modal-body>
    <mdb-modal-footer>
      <mdb-btn color="secondary" size="sm" @click.native="decline">No</mdb-btn>
      <mdb-btn color="primary" size="sm" @click.native="confirm">Yes</mdb-btn>
    </mdb-modal-footer>
  </v-dialog>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => ({}),
    },
    exists: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      propImage: {},
    }
  },
  computed: {
    img() {
      return this.propImage
    },
    exist() {
      return this.exists
    },
  },
  methods: {
    close() {
      this.$emit('update:exists', false)
    },
    decline() {
      this.propImage = {}
      this.$emit('update:image', this.img)
      this.close()
    },
    confirm() {
      this.propImage = this.image
      this.$emit('update:image', this.img)
      this.close()
    },
  },
}
</script>
