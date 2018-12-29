import {FETCH_LIST, FETCH_LIST_FULFILLED, FETCH_LIST_REJECTED} from "./actionTypes";

export const fetchList = () => ({
    type: FETCH_LIST,
});

export const fetchListFulfilled = listData => ({
    type: FETCH_LIST_FULFILLED,
    payload: listData,
});

export const fetchListRejected = error => ({
    type: FETCH_LIST_REJECTED,
    error,
});