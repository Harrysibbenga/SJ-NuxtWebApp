<template>
  <v-container fluid class="p-0 pt-5">
    <v-row>
      <v-col>
        <v-simple-table class="table">
          <thead class="black text-white">
            <tr v-if="circuit">
              <th scope="col">Track</th>
              <th scope="col">Created</th>
              <th scope="col">Updated</th>
              <th scope="col">Action</th>
            </tr>
            <tr v-if="posts">
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">Created</th>
              <th scope="col">Updated</th>
              <th scope="col">Action</th>
            </tr>
            <tr v-if="calender">
              <th scope="col">Track</th>
              <th scope="col">Created</th>
              <th scope="col">Updated</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody v-if="circuit">
            <tr v-for="(post, index) in paginatedData" :key="index">
              <th scope="row">{{ post.track }}</th>
              <td>{{ post.createdOn | formatCreation }}</td>
              <td v-if="post.lastUpdateOn != null">
                {{ post.lastUpdateOn | formatCreation }}
              </td>
              <td v-else>-- -- --</td>
              <td>
                <v-btn class="mx-1 primary" @click.native="editPost(post)">
                  <v-icon>mdi-circle-edit-outline</v-icon>
                </v-btn>
                <v-btn class="mx-1 error" @click.native="deletePost(post)">
                  <v-icon>mdi-delete-circle-outline</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
          <tbody v-if="posts">
            <tr v-for="(post, index) in paginatedData" :key="index">
              <th scope="row">
                {{ post.title }}
              </th>
              <td>
                {{ post.date | formatDate }}
              </td>
              <td>{{ post.createdOn | formatCreation }}</td>
              <td v-if="post.lastUpdateOn != null">
                {{ post.lastUpdateOn | formatCreation }}
              </td>
              <td v-else>-- -- --</td>
              <td>
                <v-btn class="mx-1 primary" @click.native="editPost(post)">
                  <v-icon>mdi-circle-edit-outline</v-icon>
                </v-btn>
                <v-btn class="mx-1 error" @click.native="deletePost(post)">
                  <v-icon>mdi-delete-circle-outline</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
          <tbody v-if="circuit">
            <tr v-for="(post, index) in paginatedData" :key="index">
              <th v-if="post.type != 'calendar'" scope="row">
                {{ post.title }}
              </th>
              <th v-else scope="row">{{ post.track }}</th>
              <td v-if="post.date && post.type != 'timeline'">
                {{ post.date | formatDate }}
              </td>
              <td v-if="post.date && post.type == 'timeline'">
                {{ post.date }}
              </td>
              <td v-if="post.type == 'partner'">-- -- --</td>
              <td>{{ post.createdOn | formatCreation }}</td>
              <td v-if="post.lastUpdateOn != null">
                {{ post.lastUpdateOn | formatCreation }}
              </td>
              <td v-else>-- -- --</td>
              <td>
                <v-btn class="mx-1 primary" @click.native="editPost(post)">
                  <v-icon>mdi-circle-edit-outline</v-icon>
                </v-btn>
                <v-btn class="mx-1 error" @click.native="deletePost(post)">
                  <v-icon>mdi-delete-circle-outline</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn
          :class="{ 'd-none': pageNumber == 0 }"
          class="primary"
          @click.native="prevPage"
        >
          <v-icon> mdi-chevron-double-left</v-icon>
        </v-btn>
        {{ pageNumber + 1 }} of {{ pageCount }}
        <v-btn
          :class="{ 'd-none': pageNumber >= pageCount - 1 }"
          class="primary"
          @click.native="nextPage"
        >
          <v-icon> mdi-chevron-double-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { filter } from '@/mixins/filter'
import { pagination } from '@/mixins/pagination'

export default {
  mixins: [filter, pagination],
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
    edit: {
      type: Boolean,
      default: false,
    },
    delete: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    pageCount() {
      const l = this.posts.length
      const s = this.size
      return Math.ceil(l / s)
    },
    paginatedData() {
      const start = this.pageNumber * this.size
      const end = start + this.size
      return this.posts.slice(start, end)
    },
  },
  methods: {
    editPost(post) {
      this.$emit('update:edit', true)
      this.$emit('update:post', post)
    },
    deletePost(post) {
      this.$emit('update:delete', true)
      this.$emit('update:post', post)
    },
  },
}
</script>
