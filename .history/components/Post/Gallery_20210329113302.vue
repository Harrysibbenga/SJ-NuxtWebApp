<template>
  <div>
    <v-row class="py-5 text-center">
      <v-col cols="12">
        <h2>Gallery content</h2>
      </v-col>
      <v-col cols="12">
        <div class="d-flex text-center">
          <ModalMultiUpload :images.sync="images"></ModalMultiUpload>
          <ModalSelectImagesModal
            :images.sync="images"
          ></ModalSelectImagesModal>
        </div>
      </v-col>
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
    </v-row>
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
