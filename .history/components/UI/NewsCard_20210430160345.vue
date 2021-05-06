<template>
  <v-card class="mx-auto position-relative" max-width="600" min-height="400">
    <v-img
      class="secondary--text align-end"
      height="400px"
      :src="fixture.url"
      :alt="fixture.alt"
    >
    </v-img>

    <v-col
      cols="6"
      class="secondary primary--text text-center position-absolute date-col"
    >
      <h3 class="text-uppercase text-h2">{{ dates.month }}</h3>
      <p class="text-h5">{{ dates.days }}</p>
    </v-col>

    <v-card-text
      class="text--primary text-center secondary"
      style="min-height: 450px"
    >
      <div v-html="post.excerpt"></div>
      <v-row align="center" class="my-auto" height="auto">
        <v-col cols="12">
          <v-btn
            :nuxt="true"
            :to="{ name: 'post-slug', params: { slug: post.slug } }"
            >Click for more</v-btn
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    fixture: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    dates() {
      const date = this.fixture.date

      const day = []
      const month = []

      day.push(moment(date.split('-')).format('Do'))
      month.push(moment(date.split('-')).format('MMM'))

      const dateObject = {
        month: month[0],
        day: day[0],
      }

      return dateObject
    },
  },
}
</script>

<style lang="scss">
.position-absolute {
  position: absolute;
}

.date-col {
  top: 0;
  right: 0;
}

.position-relative {
  position: relative;
}

.date-row {
  width: 100;
  height: 100;
}
</style>
