import { combineReducers } from 'redux'
import {GET_CAMPUS} from '../store';
const initialState = {}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    case GET_CAMPUS:
            return Object.assign({}, state, {campuses: action.campuses })
    default: return state
  }
};

export default rootReducer
