<template>
  <div>
    <v-row v-for="(quote, index) in quotes" :key="index">
      <v-col cols="4">
        <v-text-field v-model.trim="quote.name" label="Name"></v-text-field>
      </v-col>
      <v-col cols="6">
        <UiEditor :content.sync="quote.content" />
      </v-col>
      <v-col cols="2">
        <v-icon color="green">mdi-plus</v-icon>
        <v-icon color="error">mdi-minus</v-icon>
      </v-col>
    </v-row>
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
}
</script>
