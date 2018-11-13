import axios from 'axios';
import { FETCH_COUNTRIES, SELECT_COUNTRY} from './types';

export const fetchCountries = () => async dispatch => {
  try {
      const res = await axios({
        method:'get',
        url: 'https://restcountries.eu/rest/v2/all',
        json: true
      });
      dispatch({type: FETCH_COUNTRIES, payload: res.data});
  }
  catch(err){
    alert(err);
  }
};

export const selectCountry = (country) => {
  return {
      type: SELECT_COUNTRY,
      payload: country
    };
}



