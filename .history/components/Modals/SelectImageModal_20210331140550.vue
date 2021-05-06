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
              <v-btn
                dark
                text
                :disabled="selected == ''"
                @click.native="saveSelection"
              >
                Save
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-radio-group v-model="radios" row mandatory>
              <v-radio label="All" value="all" @click="filter('all')"></v-radio>
              <v-radio
                label="Images"
                value="images"
                @click="filter('image')"
              ></v-radio>
              <v-radio
                label="Circuits"
                value="circuits"
                @click="filter('circuit')"
              ></v-radio>
              <v-radio
                label="Partners"
                value="partners"
                @click="filter('partner')"
              ></v-radio>
            </v-radio-group>
            <v-row>
              <v-col
                v-for="(itm, index) in paginatedData"
                :key="index"
                class="p-0"
                cols="3"
              >
                <div
                  class="custom-control custom-radio custom-control text-center"
                >
                  <img :src="itm.url" :alt="itm.alt" class="img-fluid" />
                  <input
                    :id="itm.id"
                    v-model="selected"
                    name="images"
                    type="radio"
                    class="custom-control-input"
                    :value="{ itemData: itm }"
                  />
                  <label class="custom-control-label" :for="itm.id">
                    {{ itm.alt }}
                  </label>
                </div>
              </v-col>
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
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            class="mx-1"
            :disabled="selected == ''"
            @click.native="saveSelection"
            >Save</v-btn
          >
          <v-btn color="error" class="mx-1" @click="selectModel = false"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { pagination } from '@/mixins/pagination'
export default {
  mixins: [pagination],
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selected: '',
      selectModel: false,
      itemData: {},
      radios: null,
    }
  },
  computed: {
    items: {
      get(){
        return this.images
      },
      set(newVal){
        return newVal
      },
    },
  },
  methods: {
    select() {
      this.selectModel = true
    },
    saveSelection() {
      this.$emit('update:item', this.selected.itemData)
      this.selectModel = false
    },
    filter(val) {
      if (val === 'all') {
        this.images = this.$store.dispatch('images/setImages')
      }
      this.images = this.$store.dispatch('images/setImageByType', val)
    },
  },
}
</script>
