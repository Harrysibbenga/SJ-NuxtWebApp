<template>
  <v-card class="mx-auto position-relative" max-width="600" min-height="400">
    <v-img
      class="secondary--text align-end"
      height="400px"
      :src="fixture.url"
      :alt="fixture.alt"
      @click="clicked"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
    >
      <v-row>
        <v-col>
          <transition name="fade">
            <v-card-title v-if="hover" class="text-uppercase">
              <h3 class="text-h3">{{ fixture.track.track }}</h3>
            </v-card-title>
          </transition>
        </v-col>
      </v-row>
    </v-img>

    <v-col
      cols="4"
      class="secondary primary--text text-center position-absolute date-col"
    >
      <h3 class="text-uppercase text-h3 font-weight-black">
        {{ dates.month }}
      </h3>
      <p class="text-h5 font-weight-medium">{{ dates.days }}</p>
    </v-col>

    <transition name="fade">
      <v-card-text
        v-if="hover"
        class="text--primary text-center secondary"
        style="min-height: 450px"
      >
        <h4 class="text-h4">Rounds: {{ fixture.rounds }}</h4>
        <h4 class="text-h4">Length: {{ fixture.track.length }} mi</h4>
        <h4 class="pb-4 text-h4">Laps: {{ fixture.laps }}</h4>
        <v-row align="center" class="my-auto" height="auto">
          <v-col cols="12">
            <v-img
              class="mx-auto"
              :mix-height="500"
              :max-width="500"
              :src="fixture.track.url"
              :alt="fixture.track.alt"
            >
            </v-img>
          </v-col>
        </v-row>
      </v-card-text>
    </transition>
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
  data() {
    return {
      hover: false,
    }
  },
  computed: {
    dates() {
      let sortedDates = [this.fixture.dateFrom, this.fixture.dateTo]

      sortedDates = sortedDates.sort()

      const days = []
      const months = []

      sortedDates.forEach((date) => {
        days.push(moment(date.split('-')).format('Do'))
        months.push(moment(date.split('-')[1], 'MM').format('MMM'))
      })

      const dateObject = {
        month: months[0],
        days: days.join(' & '),
      }

      return dateObject
    },
  },
  methods: {
    clicked() {
      this.hover = !this.hover
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
