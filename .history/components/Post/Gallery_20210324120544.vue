<template>
  <div>
    <v-col col="12" class="py-3">
      <h3>Gallery content</h3>
      <div class="d-flex flex-row">
        <UIMultiUpload :images.sync="images"></UIMultiUpload>
        <UISelectImagesModal :images.sync="images"></UISelectImagesModal>
      </div>
      <v-row>
        <v-col
          v-for="(img, index) in galleryContent"
          :key="index"
          class="col-6 col-md-4"
        >
          <img :src="img.url" :alt="img.alt" class="img-fluid" />
          <button
            class="btn btn-danger btn-sm"
            @click="removeItem(index, galleryContent)"
          >
            Delete
          </button>
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
