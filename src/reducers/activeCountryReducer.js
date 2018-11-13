import { SELECT_COUNTRY } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SELECT_COUNTRY:
      return action.payload || null;
    default:
      return state;

  }
}
