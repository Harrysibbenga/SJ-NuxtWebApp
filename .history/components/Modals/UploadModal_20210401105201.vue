<template>
  <div>
    <v-btn class="mx-1" @click="upload">Upload</v-btn>

    <v-dialog
      v-model="uploadImage"
      persistent
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-card-title class="pa-0">
          <v-toolbar flat dark color="primary">
            <v-toolbar-title>Upload image</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="closeUpload">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model.trim="uploadedImage.alt"
                label="Description"
                inline
              />
            </v-col>
            <v-col cols="12">
              <v-file-input
                ref="imageInput"
                v-model="file"
                label="File upload"
                prepend-icon="mdi-camera"
                aria-describedby="Single image upload"
                accept="image/jpeg image/png"
                @change="checkFile()"
              ></v-file-input>
              {{ file }}
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            class="mx-1"
            :disabled="uploadedImage.alt == ''"
            @click.native="saveFile"
            >Save</v-btn
          >
          <v-btn color="error" class="mx-1" @click.native="closeUpload"
            >Close</v-btn
          >

          <transition name="fade">
            <UiMessage :msg="uploadMsg"></UiMessage>
          </transition>
        </v-card-actions>
      </v-card>
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
    type: {
      type: String,
      required: true,
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
      payload: {
        file: '',
        alt: '',
        type: '',
      }
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
    reset() {
      this.uploadedImage = {
        alt: '',
        url: '',
        id: '',
      }
      this.file = ''
    },
    closeUpload() {
      this.uploadImage = false
      this.reset()
    },
    checkFile() {
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
      this.payload = {
        file: this.file,
        alt: this.uploadedImage.alt,
        type: this.type,
      }

      this.$store.dispatch('global/setLoading', true)
      this.$store.dispatch('images/uploadImage', payload).then((response) => {
        this.uploadedImage = response
        this.$store.dispatch('global/setLoading', false)
        this.$emit('update:image', this.uploadedImage)
        setTimeout(() => {
          this.reset()
          this.uploadImage = false
          this.$store.commit('images/SET_MSG', {})
        }, 4000)
      })
    },
  },
}
</script>
