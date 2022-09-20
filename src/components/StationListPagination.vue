<template>
  <div class="pagination">
    <button class="icon-button" @click="firstPage" :disabled="disablePrev">
      <span class="material-icons"> keyboard_double_arrow_left </span>
    </button>
    <button class="icon-button" @click="prevPage" :disabled="disablePrev">
      <span class="material-icons"> keyboard_arrow_left </span>
    </button>
    {{ currentPage }}/{{ totalPages }}
    <button class="icon-button" @click="nextPage" :disabled="disableNext">
      <span class="material-icons"> keyboard_arrow_right </span>
    </button>
    <button class="icon-button" @click="lastPage" :disabled="disableNext">
      <span class="material-icons"> keyboard_double_arrow_right </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'StationListPagination',
  props: {
    currentPage: {
      type: Number,
      default: 0,
    },
    totalPages: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    disablePrev() {
      return this.currentPage === 1;
    },
    disableNext() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    goToPage(number) {
      this.$emit('goToPage', number);
    },
    firstPage() {
      this.goToPage(1);
    },
    prevPage() {
      this.goToPage(this.currentPage - 1);
    },
    nextPage() {
      this.goToPage(this.currentPage + 1);
    },
    lastPage() {
      this.goToPage(this.totalPages);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}
.icon-button {
  background-color: unset;
  border: none;
  cursor: pointer;
  margin: 2px;
  padding-top: 4px;
}
.icon-button:disabled {
  cursor: unset;
}
</style>
