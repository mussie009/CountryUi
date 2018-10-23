import { FETCH_CONTACTS } from '../actions/types';
import _ from 'lodash';
export default function(state = {}, action) {
  console.log('From  contacts reducer: ', action);
  switch (action.type) {
    case FETCH_CONTACTS:
      return _.mapKeys(action.payload, 'id');
    default:
      return state;

  }
}