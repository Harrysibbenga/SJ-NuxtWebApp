export const pagination = {
  props: {
    size: {
      type: Number,
      required: false,
      default: 8,
    },
  },
  data() {
    return {
      pageNumber: 0,
    }
  },
  computed: {
    pageCount() {
      const l = this.items.length
      const s = this.size
      return Math.ceil(l / s)
    },
    paginatedData() {
      const start = this.pageNumber * this.size
      const end = start + this.size
      if (this.items) {
        return this.items.slice(start, end)
      }
      return []
    },
  },
  methods: {
    nextPage() {
      this.pageNumber++
    },
    prevPage() {
      this.pageNumber--
    },
  },
}
