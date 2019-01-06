import {put, takeLatest} from 'redux-saga/effects';
import {SET_DATE} from "../actions/actionTypes";
import axios from 'axios';
import * as handleFetch from '../actions/handleFetch';

function* fetchListData() {
    const {data} = yield axios.get('https://raw.githubusercontent.com/hg-pyun/havto/master/docs/2019-01-01.md');
    console.log(data);

    const dataList = data.split('\n');

    yield put(handleFetch.fetchListFulfilled(dataList));
}

export default function* rootSaga() {
    yield takeLatest(SET_DATE, fetchListData);
}