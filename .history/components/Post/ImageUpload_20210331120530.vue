<template>
  <div>
    <v-row>
      <v-col cols="12">
        <img
          v-if="postImage.url != ''"
          :src="postImage.url"
          :alt="postImage.alt"
          class="img-fluid"
        />

        <img
          v-else
          :src="defaultImg.url"
          :alt="defaultImg.alt"
          class="img-fluid"
        />
      </v-col>
      <ModalUploadModal :image.sync="postImage" />
      <ModalSelectModal :item.sync="postImage" :items="items" />
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => ({
        url: '',
        alt: '',
        id: '',
      }),
    },
  },
  data() {
    return {
      defaultImg: {
        url:
          'https://firebasestorage.googleapis.com/v0/b/jhr-developments-c5bba.appspot.com/o/images%2Fimg-placeholder.png?alt=media&token=7d9c5978-d45d-4049-91d9-ceb235823db7',
        alt: 'Placeholder Image',
      },
    }
  },
  computed: {
    postImage: {
      get() {
        return this.image
      },
      set(newVal) {
        this.$emit('update:image', newVal)
      },
    },
    items() {
      return this.$store.getters['images/images']
    },
  },
}
</script>
