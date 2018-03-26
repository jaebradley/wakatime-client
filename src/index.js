import axios from 'axios';

class WakaTimeClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.axiosConfiguration = axios.create({
      baseURL: 'https://wakatime.com/api/v1/',
      // Base-64 encode the API Key
      // https://wakatime.com/developers#introduction
      headers: { Authorization: `Basic ${Buffer.from(this.apiKey).toString('base64')}` },
    });
  }

  getUser(userId) {
    return this.axiosConfiguration.get(`users/${userId}`);
  }

  getMyUser() {
    return this.axiosConfiguration.get('users/current');
  }
}

export default WakaTimeClient;
