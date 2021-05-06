<template>
  <div>
    <mdb-btn @click.native="upload">Multi Upload</mdb-btn>

    <mdb-modal size="fluid" :show="uploadImage" @close="closeUpload">
      <mdb-modal-header>
        <mdb-modal-title class="text-dark">Upload images</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
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
              <mdb-row>
                <mdb-col
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
                </mdb-col>
              </mdb-row>
            </div>
          </div>
        </div>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="secondary" size="sm" @click.native="closeUpload"
          >Close</mdb-btn
        >
      </mdb-modal-footer>

      <transition name="fade">
        <UIMessage :msg="uploadMsg"></UIMessage>
      </transition>
    </mdb-modal>
  </div>
</template>

<script>
import {
  mdbModal,
  mdbModalFooter,
  mdbModalBody,
  mdbModalHeader,
  mdbModalTitle,
  mdbBtn,
  mdbCol,
  mdbRow,
} from 'mdbvue'
export default {
  components: {
    mdbModal,
    mdbModalFooter,
    mdbModalBody,
    mdbModalHeader,
    mdbModalTitle,
    mdbBtn,
    mdbCol,
    mdbRow,
  },
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
