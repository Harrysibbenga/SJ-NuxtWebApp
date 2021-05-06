<template>
  <div>
    <v-row>
      <v-col
        v-if="content.type != 'circuit' && content.type != 'calendar'"
        cols="12"
      >
        <v-text-field
          v-model.trim="postContent.title"
          label="Title"
        ></v-text-field>
      </v-col>

      <v-col
        v-if="content.type == 'partner' || content.type == 'shop'"
        class="md-form"
        cols="12"
      >
        <v-text-field
          v-model.trim="postContent.link"
          label="Partner url"
        ></v-text-field>
      </v-col>

      <v-col v-if="content.type == 'car'" class="md-form" cols="12">
        <v-text-field
          v-model.trim="postContent.subtitle"
          label="Subtitle"
        ></v-text-field>
      </v-col>

      <v-row v-if="content.type == 'post'">
        <v-col cols="12">
          <v-textarea
            v-model.trim="postContent.excerpt"
            counter
            label="Excerpt"
            :value="postContent.excerpt"
          >
          </v-textarea>
        </v-col>

        <v-col cols="12">
          <v-date-picker v-model.trim="postContent.date" type="date">
          </v-date-picker>
        </v-col>
      </v-row>

      <v-row v-if="content.type == 'circuit'">
        <v-col cols="12">
          <v-text-field
            v-model.trim="postContent.track"
            label="Track"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model.trim="postContent.length"
            label="Length"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row v-if="content.type == 'calendar'">
        <v-col cols="6" class="px-5">
          <v-text-field v-model.trim="postContent.rounds" label="Rounds">
          </v-text-field>
        </v-col>

        <v-col cols="6" class="px-5">
          <v-text-field v-model.trim="postContent.laps" label="Laps">
          </v-text-field>
        </v-col>

        <v-col cols="12">
          <v-row class="text-center">
            <v-col cols="12" lg="6">
              <h3>Start:</h3>
              <v-date-picker
                v-model.trim="postContent.dateFrom"
                :value="postContent.dateFrom"
                type="date"
              >
              </v-date-picker>
            </v-col>
            <v-col cols="12" lg="6">
              <h3>Finish:</h3>
              <v-date-picker
                v-model.trim="postContent.dateTo"
                :value="postContent.dateTo"
                type="date"
              >
              </v-date-picker>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-col
        v-if="content.type != 'circuit' && content.type != 'calendar'"
        cols="12"
      >
        <h3 class="pb-1">Main content</h3>
        <UiEditor :content.sync="postContent.content"></UiEditor>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    postContent: {
      get() {
        return this.content
      },
      set(newVal) {
        this.$emit('update:content', newVal)
      },
    },
  },
}
</script>
