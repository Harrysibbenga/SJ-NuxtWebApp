<template>
  <div>
    <div class="md-form d-flex flex-row justify-space-around">
      <v-date-picker v-model="date"></v-date-picker>
      <v-time-picker v-model="time" format="24hr"></v-time-picker>
    </div>
    <v-btn class="mx-auto" @click.native="updatePublishDate">Update</v-btn>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    publishDate: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      newDate: '',
      newTime: '',
    }
  },
  computed: {
    date: {
      get() {
        return this.newDate
      },
      set(newVal) {
        this.newDate = newVal
      },
    },
    time: {
      get() {
        return this.newTime
      },
      set(newVal) {
        this.newTime = newVal
      },
    },
  },
  created() {
    if (this.publishDate === '') {
      setTimeout(() => {
        this.loadPublishDate()
      }, 500)
    } else {
      this.newDate = moment(this.publishDate).format('YYYY-MM-DD')
      this.newTime = moment(this.publishDate).format('h:mm')
    }
  },
  methods: {
    updatePublishDate() {
      const dateArr = this.newDate.split('-')
      const timeArr = this.newTime.split(':')
      const publishDate = moment({
        year: dateArr[0],
        month: dateArr[1] - 1,
        day: dateArr[2],
        hour: timeArr[0],
        minute: timeArr[1],
      }).format()
      this.$emit('update:publishDate', publishDate)
    },
    loadPublishDate() {
      this.newDate = moment().format('YYYY-MM-DD')
      this.newTime = moment().format('h:mm')
      const dateArr = this.newDate.split('-')
      const timeArr = this.newTime.split(':')
      const publishDate = moment({
        year: dateArr[0],
        month: dateArr[1] - 1,
        day: dateArr[2],
        hour: timeArr[0],
        minute: timeArr[1],
      }).format()
      this.$emit('update:publishDate', publishDate)
    },
  },
}
</script>
