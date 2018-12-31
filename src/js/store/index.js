import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

// initialize store
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = createStore(reducers, applyMiddleware(...middlewares));

// run sagas
sagaMiddleware.run(rootSaga);

export default store;