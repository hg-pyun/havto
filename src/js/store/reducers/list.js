import {FETCH_LIST_FULFILLED, FETCH_LIST_REJECTED} from "../actions/actionTypes";

const initialState = {
    listData: [],
    hasError: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_LIST_FULFILLED:
            return {
                ...state,
                listData: action.payload
            };
        case FETCH_LIST_REJECTED:
            return {
                ...state,
                hasError: true
            };
        default:
            return state;
    }
}