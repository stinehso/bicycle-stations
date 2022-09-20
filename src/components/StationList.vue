<template>
  <div>
    <div v-if="isLoading">Laster...</div>
    <div v-else>
      <StationListTable :station-list="currentStationListPage" />
      <StationListPagination
        class="pagination"
        :current-page="currentPage"
        :total-pages="totalPages"
        @goToPage="goToPage"
      />
    </div>
  </div>
</template>

<script>
import api from '../apiservices.js';
import StationListTable from './StationListTable.vue';
import StationListPagination from './StationListPagination.vue';

export default {
  name: 'StationList',
  components: {
    StationListTable,
    StationListPagination,
  },
  data() {
    return {
      stationList: [],
      isLoading: false,
      error: null,
      currentPage: 1,
      pageSize: 12,
      totalPages: 0,
    };
  },
  mounted() {
    this.getStationListData();
  },
  computed: {
    currentStationListPage() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = this.currentPage * this.pageSize;
      return this.stationList.slice(startIndex, endIndex);
    },
  },
  methods: {
    async getStationListData() {
      try {
        this.isLoading = true;
        const stationInformationResponse = await api.getStationInformation();
        const stationStatusResponse = await api.getStationStatus();
        this.stationList = this.mergeStationData(
          stationInformationResponse.data.data.stations,
          stationStatusResponse.data.data.stations
        );
        this.totalPages = Math.ceil(this.stationList.length / this.pageSize);
      } catch (error) {
        this.error = error;
      } finally {
        this.isLoading = false;
      }
    },

    mergeStationData(stationInformation, stationStatus) {
      return stationInformation.map((currentStationInformation) => {
        const currentStationStatus = stationStatus.find(
          (st) => st.station_id === currentStationInformation.station_id
        );
        return { ...currentStationInformation, ...currentStationStatus };
      });
    },
    goToPage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style scoped></style>
