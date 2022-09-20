<template>
  <div>
    <div v-if="isLoading">Laster...</div>
    <div v-else>
      {{ stationList }}
      <!-- <StationListTable :station-list="stationList" /> -->
      <!-- <StationListPagination />  -->
    </div>
  </div>
</template>

<script>
import api from '../apiservices.js';


export default {
  name: 'StationList',
  components: {
    StationListTable: () => import('./StationListTable.vue'),
    // StationListPagination: () => import('./stationListPagination'),
  },
  data() {
    return {
      stationList: [],
      isLoading: false,
      error: null,
    };
  },
  mounted() {
    this.getStationListData();
  },
  methods: {
    async getStationListData() {
      try {
        debugger
        this.isLoading = true;
        const stationInformation = await api.getStationInformation();
        const stationStatus = await api.getStationStatus();
        this.stationList = this.mergeStationData(stationInformation.data.stations, stationStatus.data.stations);
      } catch (error) {
        this.error = error;
      } finally {
        this.isLoading = false;
      }
    },
    mergeStationData(stationInformation, stationStatus) {
      return stationInformation.map(currentStationInformation => {
        const currentStationStatus = stationStatus.find(st => st.station_id === currentStationInformation.station_id);
        return {...currentStationInformation, ...currentStationStatus}
      });
    },
    sortStationList() {
      const res = this.stationList.sort(sortFunc);
    },
  },
};
</script>

<style scoped>
  
</style>
