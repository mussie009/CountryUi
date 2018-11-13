import { combineReducers } from 'redux';

import countryReducer from './countryReducer';
import activeCountryReducer from './activeCountryReducer';

export default combineReducers({
  
  countries: countryReducer,
  activeCountry: activeCountryReducer
  
});
