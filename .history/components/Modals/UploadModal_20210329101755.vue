<template>
  <div>
    <v-btn @click="upload">Upload</v-btn>

    <v-dialog
      v-model="uploadImage"
      hide-overlay
      transition="dialog-bottom-transition"
      @close="closeUpload"
    >
      <v-card>
        <v-card-title>Upload image</v-card-title>
      </v-card>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <div class="md-form">
              <v-text-field
                v-model.trim="uploadedImage.alt"
                label="Description"
                inline
              />
            </div>
          </v-col>
          <v-col cols="12">
            <v-file-input
              id="imageInput"
              ref="imageInput"
              label="File upload"
              prepend-icon="mdi-camera"
              type="file"
              class="custom-file-input"
              aria-describedby="imageInput"
              accept="image/jpeg image/png"
              @change="checkFile($event)"
            ></v-file-input>
          </v-col>
        </v-row>
      </v-card-text>
      <v-modal-footer>
        <v-btn
          color="primary"
          size="sm"
          :disabled="uploadedImage.alt == ''"
          @click.native="saveFile"
          >Save</v-btn
        >
        <v-btn color="error" size="sm" @click.native="closeUpload">Close</v-btn>
      </v-modal-footer>

      <transition name="fade">
        <UiMessage :msg="uploadMsg"></UiMessage>
      </transition>
    </v-dialog>

    <UiExistsModal v-if="exists" :exists.sync="exists" :image.sync="img" />
  </div>
</template>

<script>
import { imgCol } from '@/services/firebase'
export default {
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
