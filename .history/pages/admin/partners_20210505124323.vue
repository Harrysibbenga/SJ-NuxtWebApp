<template>
  <div>
    <v-container>
      <h2 class="font-weight-bold text-center pb-2">Partners</h2>
      <v-switch
        v-model="pageView"
        :label="`View page content ?: ${pageView.toString()}`"
      ></v-switch>
    </v-container>
    <AdminPartner v-if="pageView" />
    <v-container v-else>
      <h2 class="font-weight-bold text-center pb-2">Add Partners</h2>
      <PostImageUpload :image.sync="post.image" :type="type" />
      <PostStandardForm :content.sync="post.content" />
      <UiMessage :msg="msg" />
      <v-btn class="mt-5" color="primary" @click.native="addPost"
        >Add Partner</v-btn
      >
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
        :type="type"
        :modal.sync="editModal"
        :edit.sync="clickedPost"
        :confirmation.sync="confirmEdit"
      />
    </v-container>
  </div>
</template>

<script>
import { partnerCol } from '@/services/firebase'

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
          type: 'partner',
          title: '',
          link: '',
          content: '',
        },
        order: '',
      },
      type: 'partner',
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
      pageView: false,
    }
  },
  computed: {
    posts() {
      return this.$store.getters['partners/getPosts']
    },
    order() {
      return this.posts.length + 1
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
          title: this.emitedPost.title,
          link: this.emitedPost.link,
          content: this.emitedPost.content,
        },
        order: this.emitedPost.order,
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
          type: 'partner',
          title: '',
          link: '',
          content: '',
        },
        order: '',
      }
      this.confirmEdit = false
      this.confirmDelete = false
    },
    addPost() {
      if (this.post.image.url === '') {
        this.post.image.url = this.defaultImg.url
        this.post.image.alt = this.defaultImg.alt
      }
      partnerCol
        .add({
          title: this.post.content.title,
          createdOn: new Date(),
          imgId: this.post.image.id,
          url: this.post.image.url,
          alt: this.post.image.alt,
          type: this.post.content.type,
          link: this.post.content.link,
          content: this.content.content
          order: this.order,
        })
        .then(() => {
          this.reset()
          this.msg = {
            type: 'success',
            message: 'Partner added',
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
      if (this.post.content.link === '') {
        this.msg = {
          type: 'Warning',
          message:
            'Missing information please make sure the required information is filled',
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
        partnerCol
          .doc(this.clickedPost.id)
          .delete()
          .then(() => {
            this.deleteModal = false
            this.msg = {
              type: 'danger',
              message: 'Partner deleted',
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

        partnerCol
          .doc(this.clickedPost.id)
          .update({
            title: this.clickedPost.content.title,
            lastUpdateOn: new Date(),
            imgId: this.clickedPost.image.id,
            url: this.clickedPost.image.url,
            alt: this.clickedPost.image.alt,
            type: this.clickedPost.content.type,
            link: this.clickedPost.content.link,
            order: this.clickedPost.order,
          })
          .then(() => {
            this.reset()
            this.msg = {
              type: 'success',
              message: 'Partner updated',
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
