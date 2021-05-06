<template>
  <div>
    <mdb-btn @click.native="select">Select</mdb-btn>

    <mdb-modal
      class="text-dark"
      top
      position="top"
      full-height
      direction="top"
      :show="selectModel"
      size="fluid"
      @close="close"
    >
      <mdb-modal-header>
        <mdb-modal-title>Select images</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <div class="container-fluid">
          <div class="row">
            <div class="col-10">
              <div class="row">
                <div
                  v-for="(img, index) in paginatedData"
                  :key="index"
                  class="col-3 p-2"
                >
                  <div
                    class="custom-control custom-checkbox custom-control text-center"
                  >
                    <img :src="img.url" :alt="img.alt" class="img-fluid" />
                    <input
                      :id="img.id"
                      v-model="selectedImages"
                      type="checkbox"
                      class="custom-control-input"
                      :value="img"
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
            <div class="col-2 border-left border-dark sticky">
              <div
                v-for="(img, index) in selectedImages"
                :key="index"
                class="col-12 p-2"
              >
                <img :src="img.url" :alt="img.alt" class="img-fluid" />
              </div>
              <div class="d-flex flex-column">
                <mdb-btn color="primary" @click.native="saveSelection"
                  >Confirm</mdb-btn
                >
                <mdb-btn color="danger" @click.native="close">Close</mdb-btn>
              </div>
            </div>
          </div>
        </div>
      </mdb-modal-body>
    </mdb-modal>
  </div>
</template>

<script>
import { pagination } from '@/mixins/pagination'
import {
  mdbModal,
  mdbModalBody,
  mdbModalHeader,
  mdbModalTitle,
  mdbBtn,
  mdbIcon,
} from 'mdbvue'
export default {
  components: {
    mdbModal,
    mdbModalBody,
    mdbModalHeader,
    mdbModalTitle,
    mdbBtn,
    mdbIcon,
  },
  mixins: [pagination],
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedImages: [],
      selectModel: false,
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
    close() {
      this.selectModel = false
      this.selectedImages = []
    },
    saveSelection() {
      this.$emit('update:images', this.selectedImages)
      this.selectModel = false
      this.selectedImages = []
    },
  },
}
</script>
