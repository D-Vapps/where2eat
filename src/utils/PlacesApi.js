import { GOOGLE_PLACES_API_KEY, GOOGLE_PLACES_OUTPUT_FORMAT } from 'react-native-dotenv'
import constants from '../constants'

export default class PlacesApi {
  checkStatus(response) {
    if (response.ok) {
      return response;
    } 
    else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }

  getPlaces() {
    let finalUrl = `${constants.PLACES_API}/${GOOGLE_PLACES_OUTPUT_FORMAT}?key=${GOOGLE_PLACES_API_KEY}`;
    return fetch(finalUrl)
      .then(this.checkStatus)
      .then(response => response.json())
      .catch(e => e);
  }
}