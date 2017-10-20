import { combineReducers } from 'redux'
import {GET_CAMPUSES, ADD_STUDENT, GET_STUDENTS, GET_SINGLE_CAMPUS} from '../store';
//const initialState = {}

//INITIAL STATE
const initialState = {
    campuses: [],
    students: [],
    selectedCampus: {},
    newStudent: ''
};


const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    case GET_CAMPUSES:
            return Object.assign({}, state, {campuses: action.campuses })
    case GET_SINGLE_CAMPUS:
            return Object.assign({}, state, {selectedCampus: action.campus })
    case GET_STUDENTS:
            return Object.assign({}, state, {students: action.students })
    case ADD_STUDENT:
            return Object.assign({}, state, {students: students.concat(action.student) })
    default: return state
  }
};

export default rootReducer
