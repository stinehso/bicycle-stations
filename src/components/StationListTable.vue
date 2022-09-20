<template>
  <table class="table">
    <caption>
      Sykkelstativer
    </caption>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col" colspan="2">Tilgjengelig</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="station in stationList" :key="station.station_id">
        <th scope="row">{{ station.name }}</th>
        <td>{{ bikesDescriptionText(station.num_bikes_available) }}</td>
        <td>{{ docksDescriptionText(station.num_docks_available) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'StationListTable',
  props: {
    stationList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    bikesDescriptionText(number) {
      if (number === 1) return `${number} sykkel`;
      return `${number} sykler`;
    },
    docksDescriptionText(number) {
      if (number === 1) return `${number} lås`;
      return `${number} låser`;
    },
  },
};
</script>

<style scoped>
table {
  border-spacing: 0px;
}
table caption {
  font-weight: 600;
  font-size: 1.5em;
}
th {
  font-weight: 600;
}
th,
td {
  line-height: 1.4rem;
  padding: 0.75rem 1em;
  border-bottom: 1px solid #c2c2c2;
}
tbody th,
td {
  text-align: left;
}
</style>
