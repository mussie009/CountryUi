import axios from 'axios';
import { FETCH_CONTACTS, SELECT_CONTACT, CREATE_USER } from './types';

// import _ from 'lodash';

export const fetchContacts = () => async dispatch => {
  try {
      const res = await axios({
        method:'get',
        url: 'https://jsonplaceholder.typicode.com/users',
        json: true
      });
      //console.log(res);
      dispatch({type: FETCH_CONTACTS, payload: res.data});
  }
  catch(err){
    alert(err);
  }
};
export const selectContact = (contact) => {
  // console.log("selectContact action", contact);
  return {
      type: SELECT_CONTACT,
      payload: contact
    };
}

export const createUser = (values) => async dispatch => {
  try{
    const res = await axios({
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: values,
      json: true
    });
    dispatch({type: CREATE_USER, payload: res})
  } 
  catch(err){
    alert(err);
  }
}

