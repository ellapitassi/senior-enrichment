import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
//import socket from './socket';


//ACTION TYPES
export const GET_CAMPUSES = 'GET_CAMPUSES';
export const GET_STUDENTS = 'GET_STUDENTS';
export const GET_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS'
// export const ADD_STUDENT = 'ADD_STUDENT';


//ACTION CREATORS
export function getCampuses (campuses) {
    return {
        type: GET_CAMPUSES,
        campuses
    };
}

export function getStudents (students) {
    return {
        type: GET_STUDENTS,
        students
    };
}
export function getSingleCampus (campus) {
    return {
        type: GET_SINGLE_CAMPUS,
        campus
    }
}

// export function addStudent (student) {
//     return {
//         type: ADD_STUDENT,
//         student
//     }
// }


//THUNK CREATORS - have axios in realroot instead
export function fetchCampuses () {

  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      });
  }
}
//can we use params here? to get the specific campusId?-- for single student
export function fetchStudents () {

  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      });
  }
}

export function fetchSingleCampus (campusId) {

  return function thunk (dispatch) {
    return axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then((campus) => {
        return dispatch(getSingleCampus(campus));
      })
    //.catch((err) => { console.log(err) })
  }
}

// export function postStudent (student) {
//     return function thunk (dispatch) {
//         return axios.post('/api/students', student)
//         .then(res => res.data)
//         .then(newStudent => {
//             const action = addStudent(newStudent);
//             dispatch(action);
//         })
//     }
// }


//REDUCER -- in reducer file


// const store = createStore(reducer);
// export default store;
//STORE - exported at top?
export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))