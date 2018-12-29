import {NEXT_DATE, PREV_DATE} from "../actions/actionTypes";

const initialState = {
    currentDate: 0
};


export default function (state = initialState, action) {
    switch (action.type) {
        case PREV_DATE:
        case NEXT_DATE:
        default: return state;
    }
}