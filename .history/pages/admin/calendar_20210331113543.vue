<template>
  <section id="calendar">
    <v-container fluid>
      <h2 class="font-weight-bold text-center pb-2">Calendar Content</h2>
      <v-row>
        <v-col cols="6" md="8">
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
    </v-container>
  </section>
</template>