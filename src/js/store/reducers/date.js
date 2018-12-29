import dayjs from 'dayjs';
import {SET_NEXT_DATE, SET_PREV_DATE} from "../actions/actionTypes";

const initialState = {
    currentDate: +new Date(),
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PREV_DATE:
            return {
                ...state,
                currentDate: dayjs(state.currentDate).add(-1, 'day')
            };
        case SET_NEXT_DATE:
            return {
                ...state,
                currentDate: dayjs(state.currentDate).add(+1, 'day')
            };
        default:
            return state;
    }
}