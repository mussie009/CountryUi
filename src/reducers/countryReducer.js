import { FETCH_COUNTRIES } from '../actions/types';
import _ from 'lodash';
export default function(state = {}, action) {
  // console.log('From  countries reducer: ', action);
  switch (action.type) {
    case FETCH_COUNTRIES:
      return _.mapKeys(action.payload, 'alpha3Code');
    default:
      return state;

  }
}