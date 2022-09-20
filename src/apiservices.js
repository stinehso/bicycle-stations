import axios from 'axios';

const baseUrl = 'https://gbfs.urbansharing.com/oslobysykkel.no'
const clientIdentifier = 'stine-bicycle-stations'

let service = axios.create({
  headers: {
    common: {
      'Client-Identifier': clientIdentifier,
    }
  }
})

export default {
  async getStationInformation() {
    const { data } = await service.get(`${baseUrl}/station_information.json`);
    return data;
  },
  async getStationStatus() {
    const { data } = await service.get(`${baseUrl}/station_status.json`);
    return data;
  },
}