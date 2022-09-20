import axios from 'axios';

const baseUrl = 'https://gbfs.urbansharing.com/oslobysykkel.no';
const clientIdentifier = 'stine-bicycle-stations';

let service = axios.create({
  baseURL: baseUrl,
  headers: {
    common: {
      'Client-Identifier': clientIdentifier,
    },
  },
});

export default {
  async getStationInformation() {
    return service({
      method: 'GET',
      url: '/station_information.json',
    });
  },
  async getStationStatus() {
    return service({
      method: 'GET',
      url: '/station_status.json',
    });
  },
};
