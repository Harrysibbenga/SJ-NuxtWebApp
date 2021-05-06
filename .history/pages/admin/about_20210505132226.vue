<template>
  <v-container>
    <h2 class="font-weight-bold text-center pb-2">About Content</h2>
    <PostImageUpload :image.sync="post.image" :type="type" />
    <PostStandardForm :content.sync="post.content" />
    <v-row>
      <h3 class="font-weight-bold text-center pb-2">Bio</h3>
      <v-col>
        <PostImageUpload :image.sync="post.bio.image" :type="type" />
      </v-col>
      <v-col>
        <UiEditor :content="post.bio.content" />
      </v-col>
    </v-row>
    <UiMessage :msg="msg" />
    <v-btn class="mt-5" color="primary" @click.native="update"
      >Update content</v-btn
    >
  </v-container>
</template>

<script>
import { aboutCol } from '@/services/firebase'

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
        id: this.$store.getters['about/getAbout'].id,
        image: {
          id: this.$store.getters['about/getAbout'].imgId,
          url: this.$store.getters['about/getAbout'].url,
          alt: this.$store.getters['about/getAbout'].alt,
        },
        content: {
          type: 'about',
          title: this.$store.getters['about/getAbout'].title,
          content: this.$store.getters['about/getAbout'].content,
        },
        bio: {
          image: {
            id: this.$store.getters['about/getAbout'].bio.imgId,
            url: this.$store.getters['about/getAbout'].bio.url,
            alt: this.$store.getters['about/getAbout'].bio.alt,
          },
          content: this.$store.getters['about/getAbout'].bio.content,
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

      aboutCol
        .doc(this.post.id)
        .update({
          title: this.post.content.title,
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
            message: 'About updated',
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
