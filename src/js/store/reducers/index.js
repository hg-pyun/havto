import {combineReducers} from 'redux';
import date from './date';
import list from './list';

export default combineReducers({
    date,
    list,
});