<template>
  <v-container>
    <h2 class="font-weight-bold text-center pb-2">Headline Content</h2>
    <PostImageUpload :image.sync="post.image" :type="type" />
    <PostStandardForm :content.sync="post.content" />
    <UiMessage :msg="msg" />
    <v-btn class="mt-5" color="primary" @click.native="update"
      >Update content</v-btn
    >
  </v-container>
</template>

<script>
import { carCol } from '@/services/firebase'

export default {
  data() {
    return {
      msg: {
        type: '',
        message: '',
      },
      defaultImg: {
        url:
          'https://firebasestorage.googleapis.com/v0/b/jhr-developments-c5bba.appspot.com/o/images%2Fimg-placeholder.png?alt=media&token=7d9c5978-d45d-4049-91d9-ceb235823db7',
        alt: 'Placeholder Image',
      },
      type: 'image',
    }
  },
  computed: {
    post() {
      const post = {
        id: this.$store.getters['headline/getHeadline'].id,
        image: {
          id: this.$store.getters['headline/getHeadline'].imgId,
          url: this.$store.getters['headline/getHeadline'].url,
          alt: this.$store.getters['headline/getHeadline'].alt,
        },
        content: {
          type: 'headline',
          title: this.$store.getters['headline/getHeadline'].title,
          subtitle: this.$store.getters['headline/getHeadline'].subtitle,
          content: this.$store.getters['headline/getHeadline'].content,
        },
      }
      return post
    },
  },
  methods: {
    update() {
      if (this.post.image.url === '') {
        this.post.image.url = this.defaultImg.url
        this.post.image.alt = this.defaultImg.alt
      }

      carCol
        .doc(this.post.id)
        .update({
          title: this.post.content.title,
          subtitle: this.post.content.subtitle,
          content: this.post.content.content,
          lastUpdateOn: new Date(),
          imgId: this.post.image.id,
          url: this.post.image.url,
          alt: this.post.image.alt,
          type: this.post.content.type,
        })
        .then(() => {
          this.msg = {
            type: 'success',
            message: 'Headline updated',
          }
          setTimeout(() => {
            this.msg = {
              type: '',
              message: '',
            }
          }, 2000)
        })
        .catch((err) => {
          this.msg = {
            type: 'warning',
            message: err.message,
          }
          setTimeout(() => {
            this.msg = {
              type: '',
              message: '',
            }
          }, 2000)
        })
    },
  },
}
</script>
