<template>
  <div>
    <v-row v-for="(quote, index) in quotes" :key="index">
      <v-col cols="4">
        <v-text-field>
            
        </v-text-field>
      </v-col>
      <v-col cols="8">
        <UiEditor :content.sync="quote.content" />
      </v-col>
    </v-row>
  </div>
</template>
