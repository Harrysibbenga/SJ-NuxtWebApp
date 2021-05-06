<template>
  <v-container fluid>
    <h3 class="font-weight-bold text-center pb-2">Add Fixture</h3>
    <v-row>
      <v-col cols="12">
        <form @submit.prevent="submitForm">
          <ModalSelectModal :items="tracks" :item.sync="post.track" />
          <PostStandardForm :content.sync="post.content" />
          <UiMessage :msg="msg" />
          <v-btn class="mt-5" color="primary" type="submit">Add Fixture</v-btn>
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
      <ModalDeleteModal
        :modal.sync="deleteModal"
        :item.sync="emitedPost"
        :confirmation.sync="confirmDelete"
      />
      <ModalEditModal
        :type="'fixture'"
        :modal.sync="editModal"
        :edit.sync="clickedPost"
        :confirmation.sync="confirmEdit"
      />
    </v-row>
  </v-container>
</template>

<script>
import { calendarCol } from '@/services/firebase'

export default {
  data() {
    return {
      post: {
        track: {},
        content: {
          type: 'calendar',
          dateFrom: '',
          dateTo: '',
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
      return this.$store.getters['calendar/getPosts']
    },
    tracks() {
      return this.$store.getters['circuit/getPosts']
    },
    clickedPost() {
      const clickedPost = {
        track: this.emitedPost.track,
        content: {
          type: this.emitedPost.type,
          dateFrom: this.emitedPost.date[0],
          dateTo: this.emitedPost.date[1],
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
        track: {},
        content: {
          type: 'calendar',
          dateFrom: '',
          dateTo: '',
        },
      }
      this.confirmEdit = false
      this.confirmDelete = false
    },
    addPost() {
      calendarCol
        .add({
          date: [this.post.content.dateFrom, this.post.content.dateTo],
          track: this.post.track,
          createdOn: new Date(),
          type: this.post.content.type,
        })
        .then(() => {
          this.reset()
          this.msg = {
            type: 'success',
            message: 'Fixture added',
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
      if (this.post.content.date === '') {
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
        calendarCol
          .doc(this.clickedPost.id)
          .delete()
          .then(() => {
            this.deleteModal = false
            this.msg = {
              type: 'danger',
              message: 'Fixture deleted',
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
        calendarCol
          .doc(this.clickedPost.id)
          .update({
            track: this.clickedPost.track,
            date: this.clickedPost.content.date,
            lastUpdateOn: new Date(),
            type: this.clickedPost.content.type,
          })
          .then(() => {
            this.reset()
            this.msg = {
              type: 'success',
              message: 'Fixture updated',
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
