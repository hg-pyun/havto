import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

const middlewares = [];
export default createStore(reducers, applyMiddleware(...middlewares));