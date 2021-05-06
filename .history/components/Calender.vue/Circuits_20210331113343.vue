<template>
  <div>
    <v-container fluid>
      <h2 class="font-weight-bold text-center pb-2">Calendar Content</h2>
      <v-row>
        <v-col cols="12">
          <form @submit.prevent="submitForm">
            <PostImageUpload :image.sync="post.image" />
            <PostStandardForm :content.sync="post.content" />
            <UiMessage :msg="msg" />
            <v-btn class="mt-5" color="primary" type="submit"
              >Add Fixture</v-btn
            >
          </form>
        </v-col>
      </v-row>
      <v-row>
        <PostEditPosts
          :posts="posts"
          :edit.sync="editModal"
          :delete.sync="deleteModal"
          :post.sync="emitedPost"
        />
        <UIDeleteModal
          :modal.sync="deleteModal"
          :item.sync="emitedPost"
          :confirmation.sync="confirmDelete"
        />
        <UiEditModal
          :gallery="false"
          :modal.sync="editModal"
          :edit.sync="clickedPost"
          :confirmation.sync="confirmEdit"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { circuitCol } from '@/services/firebase'

export default {
  data() {
    return {
      post: {
        image: {
          id: '',
          url: '',
          alt: '',
        },
        content: {
          type: 'circuit',
          track: '',
          date: '',
        },
      },
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
    }
  },
  computed: {
    posts() {
      return this.$store.getters['circuit/getPosts']
    },
    clickedPost() {
      const clickedPost = {
        image: {
          id: this.emitedPost.imgId,
          url: this.emitedPost.url,
          alt: this.emitedPost.alt,
        },
        content: {
          type: this.emitedPost.type,
          track: this.emitedPost.track,
          date: this.emitedPost.date,
        },
        id: this.emitedPost.id,
      }
      return clickedPost
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
        content: {
          type: 'circuit',
          track: '',
          date: '',
        },
      }
      this.confirmEdit = false
      this.confirmDelete = false
    },
    addPost() {
      if (this.post.image.url === '') {
        this.post.image.url = this.defaultImg.url
        this.post.image.alt = this.defaultImg.alt
      }

      circuitCol
        .add({
          date: this.post.content.date,
          track: this.post.content.track,
          createdOn: new Date(),
          imgId: this.post.image.id,
          url: this.post.image.url,
          alt: this.post.image.alt,
          type: this.post.content.type,
        })
        .then(() => {
          this.reset()
          this.msg = {
            type: 'success',
            message: 'Circuit added',
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
        circuitCol
          .doc(this.clickedPost.id)
          .delete()
          .then(() => {
            this.deleteModal = false
            this.msg = {
              type: 'danger',
              message: 'Circuit deleted',
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
        if (this.clickedPost.image.url === '') {
          this.clickedPost.image.url = this.defaultImg.url
          this.clickedPost.image.alt = this.defaultImg.alt
        }

        circuitCol
          .doc(this.clickedPost.id)
          .update({
            track: this.clickedPost.content.track,
            date: this.clickedPost.content.date,
            lastUpdateOn: new Date(),
            imgId: this.clickedPost.image.id,
            url: this.clickedPost.image.url,
            alt: this.clickedPost.image.alt,
            type: this.clickedPost.content.type,
          })
          .then(() => {
            this.reset()
            this.msg = {
              type: 'success',
              message: 'Circuit updated',
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
