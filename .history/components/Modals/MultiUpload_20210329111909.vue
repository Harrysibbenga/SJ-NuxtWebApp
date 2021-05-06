<template>
  <div>
    <v-btn class="mx-1" @click.native="upload">Multi Upload</v-btn>

    <v-dialog size="fluid" :show="uploadImage" @close="closeUpload">
      <v-modal-header>
        <v-modal-title class="text-dark">Upload images</v-modal-title>
      </v-modal-header>
      <v-modal-body>
        <div class="row">
          <div class="col-12">
            <div class="input-group">
              <div class="input-group-prepend">
                <span id="imageInput" class="input-group-text">Upload</span>
              </div>
              <div class="custom-file">
                <input
                  id="imageInput"
                  ref="imageInput"
                  type="file"
                  multiple
                  class="custom-file-input"
                  aria-describedby="imageInput"
                  accept="image/jpeg image/png"
                  @change="checkFiles($event)"
                />
                <label class="custom-file-label" for="inputGroupFile01"
                  >Multiple Upload</label
                >
              </div>
              <v-row>
                <v-col
                  v-for="(img, index) in uploadImages"
                  :key="index"
                  class="col-6 col-md-4 pt-3"
                >
                  <img
                    v-if="img"
                    :src="img.url"
                    :alt="img.alt"
                    class="img-fluid"
                  />
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </v-modal-body>
      <v-modal-footer>
        <v-btn color="secondary" size="sm" @click.native="closeUpload"
          >Close</v-btn
        >
      </v-modal-footer>

      <transition name="fade">
        <UIMessage :msg="uploadMsg"></UIMessage>
      </transition>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      files: [],
      uploadImage: false,
      exists: false,
      uploadImages: [],
    }
  },
  computed: {
    uploadMsg() {
      return this.$store.getters['images/message']
    },
    imgs() {
      return this.uploadImages
    },
  },
  methods: {
    upload() {
      this.uploadImage = true
    },
    closeUpload() {
      this.uploadImage = false
      if (this.imgs.length > 0) {
        this.$emit('update:images', this.imgs)
      }
      this.uploadImages = []
    },
    uploadImagesMethod() {
      this.files.forEach((file) => {
        file.alt = file.name
        this.$store.dispatch('images/multiUpload', file).then((response) => {
          this.uploadImages.push(response)
        })
      })
    },
    checkFiles() {
      this.files = this.$refs.imageInput.files
      this.uploadImagesMethod()
    },
  },
}
</script>
