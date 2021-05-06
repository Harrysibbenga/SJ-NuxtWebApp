<template>
  <div>
    <v-container fluid class="my-10">
      <h3>Quotes</h3>
      <v-row v-for="(quote, index) in quotes" :key="index">
        <v-col cols="10">
          <v-col cols="6">
            <v-text-field v-model.trim="quote.name" label="Name"></v-text-field>
          </v-col>
          <v-col cols="12">
            <UiEditor :content.sync="quote.content" />
          </v-col>
        </v-col>
        <v-col cols="2" class="my-auto text-center">
          <v-icon color="green" @click.native="add">mdi-plus</v-icon>
          <v-icon v-if="index != 0" color="error" @click.native="remove"
            >mdi-minus</v-icon
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quotes: [
        {
          name: '',
          content: '',
        },
      ],
    }
  },
  methods: {
    add() {
      this.quotes.add({ name: '', content: '' })
    },
    remove() {
        
    },
  },
}
</script>
