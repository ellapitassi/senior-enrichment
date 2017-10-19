import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
//import socket from './socket';

//INITIAL STATE
const initialState = {
    campuses: []
};


//ACTION TYPES
export const GET_CAMPUS = 'GET_CAMPUS';

//ACTION CREATORS
export function getCampus (campus) {
    return {
        type: GET_CAMPUS,
        campus
    };
}

//THUNK CREATORS - have axios in realroot instead
export function fetchCampuses () {

  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampus(campuses);
        dispatch(action);
      });
  }
}



//REDUCER -- in reducer file


// const store = createStore(reducer);
// export default store;
//STORE - exported at top?
export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))