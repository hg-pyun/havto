import {put, takeEvery} from 'redux-saga/effects';
import {SET_DATE} from "../actions/actionTypes";
import {delay} from "redux-saga";
import * as handleFetch from '../actions/handleFetch';

function* fetchListData() {
    yield delay(1000);

    const data = [];

    for(let i=0; i<5; i++) {
        data.push({
            contents: `TEXT TEXT TEXT TEXT TEXT ${i} ${+ new Date()}`,
            checked: false
        })
    }

    yield put(handleFetch.fetchListFulfilled(data));
}

export default function* rootSaga() {
    yield takeEvery(SET_DATE, fetchListData);
}