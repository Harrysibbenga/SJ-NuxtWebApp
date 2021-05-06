<template>
  <div>
    <v-col cols="12" class="py-3">
      <h3>Gallery content</h3>
      <div class="d-flex flex-row">
        <ModalMultiUpload :images.sync="images"></ModalMultiUpload>
        <ModalSelectImagesModal :images.sync="images"></ModalSelectImagesModal>
      </div>
      <v-row>
        <v-col
          v-for="(img, index) in galleryContent"
          :key="index"
          cols="6"
          md="4"
        >
          <img :src="img.url" :alt="img.alt" class="img-fluid" />
          <v-btn
            elevation="2"
            outlined
            @click="removeItem(index, galleryContent)"
            >Delete</v-btn
          >
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  props: {
    gallery: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      imageProp: [],
    }
  },
  computed: {
    galleryContent: {
      get() {
        return this.gallery
      },
      set(newVal) {
        this.$emit('update:gallery', newVal)
      },
    },
    images: {
      get() {
        return this.imageProp
      },
      set(newVal) {
        newVal.forEach((img) => {
          this.galleryContent.push(img)
        })
      },
    },
  },
  methods: {
    removeItem(index, gallery) {
      gallery.splice(index, 1)
    },
  },
}
</script>
