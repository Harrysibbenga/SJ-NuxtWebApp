<template>
  <section id="news">
    <v-container>
      <h2 class="font-weight-bold text-center pb-2">News</h2>
      <v-switch
        v-model="pageView"
        :label="`View page content ?: ${pageView.toString()}`"
      ></v-switch>
    </v-container>
    <AdminNews v-if="pageView" />
    <v-container v-else>
      <h2 class="font-weight-bold text-center pb-2">Add News Item</h2>
      <div class="pt-2">
        <PostImageUpload :image.sync="post.image" :type="type" />
        <PostStandardForm :content.sync="post.content" />
        <PostQuotes :quotes.sync="post.quotes" />
        <PostGallery :gallery.sync="post.gallery" />
        <UiMessage :msg="msg" />
        <v-btn class="mt-5" color="primary" @click="submitForm">Add Post</v-btn>
      </div>
    </v-container>
    <v-container fluid>
      <PostEditPosts
        :posts="posts"
        :edit.sync="editModal"
        :delete.sync="deleteModal"
        :post.sync="emitedPost"
      />
      <ModalDeleteModal
        :modal.sync="deleteModal"
        :item.sync="emitedPost"
        :confirmation.sync="confirmDelete"
      />
      <ModalEditModal
        :modal.sync="editModal"
        :edit.sync="clickedPost"
        :confirmation.sync="confirmEdit"
        :quote="true"
        :gallery="true"
      />
    </v-container>
  </section>
</template>

<script>
import { postsCol } from '@/services/firebase'

export default {
  data() {
    return {
      post: {
        image: {
          id: '',
          url: '',
          alt: '',
        },
        gallery: [],
        content: {
          type: 'post',
          title: '',
          track: '',
          content: '',
          excerpt: '',
          date: '',
        },
        quotes: [
          {
            name: '',
            content: '',
          },
        ],
        slug: '',
        year: '',
      },
      type: 'image',
      msg: {
        type: '',
        message: '',
      },
      defaultImg: {
        url:
          'https://firebasestorage.googleapis.com/v0/b/jhr-developments-c5bba.appspot.com/o/images%2Fimg-placeholder.png?alt=media&token=7d9c5978-d45d-4049-91d9-ceb235823db7',
        alt: 'Placeholder Image',
      },
      editModal: false,
      deleteModal: false,
      confirmDelete: false,
      confirmEdit: false,
      emitedPost: {},
      newPost: {},
      pageView: false
    }
  },
  computed: {
    posts() {
      return this.$store.getters['posts/getPosts']
    },
    clickedPost: {
      get() {
        const clickedPost = {
          image: {
            id: this.emitedPost.imgId,
            url: this.emitedPost.url,
            alt: this.emitedPost.alt,
          },
          gallery: this.emitedPost.gallery,
          content: {
            type: this.emitedPost.type,
            title: this.emitedPost.title,
            track: this.emitedPost.track,
            content: this.emitedPost.content,
            excerpt: this.emitedPost.excerpt,
            date: this.emitedPost.date,
          },
          quotes: this.emitedPost.quotes,
          slug: this.emitedPost.slug,
          year: this.emitedPost.year,
          id: this.emitedPost.id,
        }
        return clickedPost
      },
      set(newVal) {
        this.newPost = newVal
      },
    },
  },
  watch: {
    confirmDelete(newVal, oldVal) {
      if (newVal === true) {
        this.deleteConfirm(newVal)
      }
    },
    confirmEdit(newVal, oldVal) {
      if (newVal === true) {
        this.editConfirm(newVal)
      }
    },
  },
  methods: {
    reset() {
      this.post = {
        image: {
          id: '',
          url: '',
          alt: '',
        },
        gallery: [],
        content: {
          type: 'post',
          title: '',
          track: '',
          content: '',
          excerpt: '',
          date: '',
        },
        quotes: [
          {
            name: '',
            content: '',
          },
        ],
        slug: '',
        year: '',
      }
      this.confirmEdit = false
      this.confirmDelete = false
    },
    addPost() {
      let slugArry = []
      const newSlug = []
      let date = ''
      // create slug
      slugArry = this.post.content.title.split(' ')
      date = this.post.content.date
      this.post.year = date.split('-')[0]

      slugArry.forEach((item) => {
        newSlug.push(item.toLowerCase())
      })

      this.post.slug = newSlug.join('-') + '-' + date

      if (this.post.image.url === '') {
        this.post.image.url = this.defaultImg.url
        this.post.image.alt = this.defaultImg.alt
      }

      postsCol
        .add({
          title: this.post.content.title,
          excerpt: this.post.content.excerpt,
          slug: this.post.slug,
          date: this.post.content.date,
          content: this.post.content.content,
          quotes: this.post.quotes,
          track: this.post.content.track,
          year: this.post.year,
          createdOn: new Date(),
          imgId: this.post.image.id,
          url: this.post.image.url,
          alt: this.post.image.alt,
          type: this.post.content.type,
          gallery: this.post.gallery,
        })
        .then(() => {
          this.reset()
          this.msg = {
            type: 'success',
            message: 'Post added',
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
    submitForm() {
      if (this.post.content.date === '' || this.post.content.title === '') {
        this.msg = {
          type: 'Warning',
          message:
            'Missing information please make sure the post information is filled',
        }
        setTimeout(() => {
          this.msg = {
            type: '',
            message: '',
          }
        }, 2000)
      } else {
        this.addPost()
      }
    },
    deleteConfirm(confirm) {
      if (confirm) {
        postsCol
          .doc(this.clickedPost.id)
          .delete()
          .then(() => {
            this.deleteModal = false
            this.msg = {
              type: 'danger',
              message: 'Post deleted',
            }
            setTimeout(() => {
              this.msg = {
                type: '',
                message: '',
              }
            }, 2000)
          })
          .catch((error) => {
            this.msg = {
              type: 'warning',
              message: error.message,
            }
            setTimeout(() => {
              this.msg = {
                type: '',
                message: '',
              }
            }, 2000)
          })
      }
    },
    editConfirm(confirm) {
      if (confirm) {
        let slugArry = []
        const newSlug = []
        let date = ''
        // create slug
        slugArry = this.clickedPost.content.title.split(' ')
        date = this.clickedPost.content.date
        this.clickedPost.year = date.split('-')[0]

        slugArry.forEach((item) => {
          newSlug.push(item.toLowerCase())
        })

        this.clickedPost.slug = newSlug.join('-') + '-' + date

        if (this.clickedPost.image.url === '') {
          this.clickedPost.image.url = this.defaultImg.url
          this.clickedPost.image.alt = this.defaultImg.alt
        }

        postsCol
          .doc(this.clickedPost.id)
          .update({
            title: this.clickedPost.content.title,
            excerpt: this.clickedPost.content.excerpt,
            slug: this.clickedPost.slug,
            date: this.clickedPost.content.date,
            content: this.clickedPost.content.content,
            quotes: this.clickedPost.quotes,
            track: this.clickedPost.content.track,
            year: this.clickedPost.year,
            lastUpdateOn: new Date(),
            imgId: this.clickedPost.image.id,
            url: this.clickedPost.image.url,
            alt: this.clickedPost.image.alt,
            type: this.clickedPost.content.type,
            gallery: this.clickedPost.gallery,
          })
          .then(() => {
            this.reset()
            this.msg = {
              type: 'success',
              message: 'Post updated',
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
      }
    },
  },
}
</script>
