<template>
  <div>
    <v-btn class="mx-1" @click.native="select">Select</v-btn>

    <v-dialog v-model="selectModel" persistent scrollable>
      <v-card>
        <v-card-title class="pa-0">
          <v-toolbar flat dark color="primary">
            <v-toolbar-title>Select an image</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="selectModel = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-items>
              <v-btn dark text @click.native="saveSelection"> Save </v-btn>
            </v-toolbar-items>
          </v-toolbar>
        </v-card-title>
        <v-card-text>
          <div class="container-fluid">
            <div class="row">
              <div
                v-for="(img, index) in paginatedData"
                :key="index"
                class="col-3 p-0"
              >
                <div
                  class="custom-control custom-radio custom-control text-center"
                >
                  <img :src="img.url" :alt="img.alt" class="img-fluid" />
                  <input
                    :id="img.id"
                    v-model="selected"
                    name="images"
                    type="radio"
                    class="custom-control-input"
                    :value="{ imgData: img }"
                  />
                  <label class="custom-control-label" :for="img.id">
                    {{ img.alt }}
                  </label>
                </div>
              </div>
              <mdb-col class="col-12 text-center">
                <mdb-btn
                  :class="{ 'd-none': pageNumber == 0 }"
                  color="primary"
                  @click.native="prevPage"
                >
                  <mdb-icon icon="angle-double-left" />
                </mdb-btn>
                {{ pageNumber + 1 }} of {{ pageCount }}
                <mdb-btn
                  :class="{ 'd-none': pageNumber >= pageCount - 1 }"
                  color="primary"
                  @click.native="nextPage"
                >
                  <mdb-icon icon="angle-double-right" />
                </mdb-btn>
              </mdb-col>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { pagination } from '@/mixins/pagination'
export default {
  mixins: [pagination],
  props: {
    image: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      selected: '',
      selectModel: false,
      imgData: {},
    }
  },
  computed: {
    items() {
      return this.$store.getters['images/images']
    },
  },
  methods: {
    select() {
      this.selectModel = true
    },
    saveSelection() {
      this.$emit('update:image', this.selected.imgData)
      this.selectModel = false
    },
  },
}
</script>
