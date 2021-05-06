<template>
  <div>
    <mdb-btn @click.native="upload">Upload</mdb-btn>

    <mdb-modal size="lg" :show="uploadImage" @close="closeUpload">
      <!-- <app-loader></app-loader> -->
      <mdb-modal-header>
        <mdb-modal-title class="text-dark">Upload image</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <div class="row">
          <div class="col-12">
            <div class="md-form">
              <mdb-input
                v-model.trim="uploadedImage.alt"
                label="Description"
                inline
              />
            </div>
          </div>
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
                  class="custom-file-input"
                  aria-describedby="imageInput"
                  accept="image/jpeg image/png"
                  @change="checkFile($event)"
                />
                <label
                  v-if="file"
                  class="custom-file-label"
                  for="inputGroupFile01"
                  >{{ file.name }}</label
                >
                <label v-else class="custom-file-label" for="inputGroupFile01"
                  >Image</label
                >
              </div>
            </div>
          </div>
        </div>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="secondary" size="sm" @click.native="closeUpload"
          >Close</mdb-btn
        >
        <mdb-btn
          color="primary"
          size="sm"
          :disabled="uploadedImage.alt == ''"
          @click.native="saveFile"
          >Save</mdb-btn
        >
      </mdb-modal-footer>

      <transition name="fade">
        <UIMessage :msg="uploadMsg"></UIMessage>
      </transition>
    </mdb-modal>

    <UIExistsModal v-if="exists" :exists.sync="exists" :image.sync="img" />
  </div>
</template>

<script>
import { imgCol } from '@/services/firebase'

import {
  mdbModal,
  mdbModalFooter,
  mdbModalBody,
  mdbModalHeader,
  mdbModalTitle,
  mdbBtn,
  mdbInput,
} from 'mdbvue'
export default {
  components: {
    mdbModal,
    mdbModalFooter,
    mdbModalBody,
    mdbModalHeader,
    mdbModalTitle,
    mdbBtn,
    mdbInput,
  },
  props: {
    image: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      file: '',
      uploadImage: false,
      exists: false,
      exisitsImg: {},
      uploadedImage: {
        alt: '',
        url: '',
        id: '',
      },
    }
  },
  computed: {
    uploadMsg() {
      return this.$store.getters['images/message']
    },
    img: {
      get() {
        return this.image
      },
      set(newValue) {
        this.$emit('update:image', newValue)
      },
    },
  },
  methods: {
    upload() {
      this.uploadImage = true
    },
    closeUpload() {
      this.uploadImage = false
      this.file = ''
    },
    checkFile(event) {
      // multiple files
      this.file = event.target.files[0]
      imgCol
        .where('name', '==', this.file.name)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            if (doc.exists) {
              this.uploadImage = false
              this.img.url = doc.data().url
              this.img.alt = doc.data().alt
              this.img.id = doc.id
              this.exists = true
            }
          })
        })
    },
    saveFile() {
      this.file.alt = this.uploadedImage.alt
      this.$store.dispatch('global/setLoading', true)
      this.$store.dispatch('images/uploadImage', this.file).then((response) => {
        this.uploadedImage = response
        this.$store.dispatch('global/setLoading', false)
        this.$emit('update:image', this.uploadedImage)
        setTimeout(() => {
          this.file = ''
          this.uploadImage = false
          this.uploadedImage = {
            alt: '',
            url: '',
            id: '',
          }
          this.$store.commit('images/SET_MSG', {})
        }, 2000)
      })
    },
  },
}
</script>
