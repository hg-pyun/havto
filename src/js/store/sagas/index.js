import {select, put, takeLatest} from 'redux-saga/effects';
import {FETCH_LIST, SET_DATE} from "../actions/actionTypes";
import axios from 'axios';
import * as handleFetch from '../actions/handleFetch';
import dayjs from "dayjs";

const getDate = state => dayjs(state.date.currentDate).format('YYYY-MM-DD');

function* fetchListData() {
    try {
        const url = 'https://raw.githubusercontent.com/hg-pyun/havto/master/docs/';
        const date = yield select(getDate);
        const {data} = yield axios.get(`${url}${date}.md`);
        const dataList = data.split('\n');
        yield put(handleFetch.fetchListFulfilled(dataList));
    } catch (e) {
        yield put(handleFetch.fetchListRejected(e.message));
    }
}

export default function* rootSaga() {
    yield takeLatest(FETCH_LIST, fetchListData);
    yield takeLatest(SET_DATE, fetchListData);
}