<template>
  <div>
    <v-btn class="mx-1" @click.native="upload">Multi Upload</v-btn>

    <v-dialog v-model="uploadImage" persistent scrollable>
      <v-card>
        <v-card-title class="pa-0">
          <v-toolbar flat dark color="primary">
            <v-toolbar-title>Multi upload</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="closeUpload">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-file-input
                v-model="files"
                prepend-icon="mdi-camera"
                multiple
                label="File input"
                aria-describedby="Muiti image upload"
                accept="image/jpeg image/png"
              >
                <template #selection="{ text }">
                  <v-chip small label color="primary">
                    {{ text }}
                  </v-chip>
                </template>
              </v-file-input>
              {{ files }}
              <v-row>
                <v-col
                  v-for="(img, index) in uploadImages"
                  :key="index"
                  class="pt-3"
                  cols="6"
                  md="4"
                >
                  <img
                    v-if="img"
                    :src="img.url"
                    :alt="img.alt"
                    class="img-fluid"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            class="mx-1"
            :disabled="files === []"
            @click="uploadImagesMethod"
            >Upload</v-btn
          >
          <v-btn color="error" class="mx-1" @click.native="closeUpload"
            >Close</v-btn
          >
        </v-card-actions>

        <transition name="fade">
          <UIMessage :msg="uploadMsg"></UIMessage>
        </transition>
      </v-card>
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
  },
}
</script>
