import { GOOGLE_PLACES_API_KEY, GOOGLE_PLACES_OUTPUT_FORMAT } from 'react-native-dotenv'
import constants from '../constants'
import ArrayUtils from './ArrayUtils'

const PlacesApi = {
  checkStatus: function(response) {
    if (response.ok) {
      return response;
    } 
    else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  },

  getPlaces: function(time = null, radius = null, location = null) {
    const date = new Date();
    const timeTemp = time !== null ? time : { action: null, hour: date.getHours(), minute: date.getMinutes() }; // Default: now
    const type = null;
    
    const params = {
      // TODO: check users params
      // Default: restaurant
      type: type !== null ? type : 'restaurant', 
      // TODO: check users params
      // Default: 5 km
      radius: radius !== null ? radius : 5000, 
      // TODO: find better default value
      // Default: Lausanne
      location: location !== null ? location : "46.5226,6.6326" 
    };

    const query = Object.keys(params)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');

    const finalUrl = `${constants.PLACES_API}/${GOOGLE_PLACES_OUTPUT_FORMAT}?key=${GOOGLE_PLACES_API_KEY}&${query}`;
    console.log(finalUrl);

    return fetch(finalUrl)
      .then(this.checkStatus)
      .then(res => res.json())
      .catch(e => e);
  }
}

export default PlacesApi;