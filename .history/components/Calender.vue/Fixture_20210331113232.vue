<template>
  <v-container fluid>
    <h2 class="font-weight-bold text-center pb-2">Calendar Content</h2>
    <v-row>
      <v-col cols="12">
        <form @submit.prevent="submitForm">
          <PostImageUpload :image.sync="post.image" />
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
</template>
