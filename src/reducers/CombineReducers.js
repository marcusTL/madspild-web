import {combineReducers} from 'redux';
import selectedItemReducer from './selectedItemReducer';
import opskriftReducer from './opskriftReducer'

export default combineReducers({
   opskrifter: opskriftReducer,
   selectedItem: selectedItemReducer

});