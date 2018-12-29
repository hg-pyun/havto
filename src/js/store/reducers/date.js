import dayjs from 'dayjs';
import {NEXT_DATE, PREV_DATE} from "../actions/actionTypes";

const initialState = {
    currentDate: +new Date(),
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PREV_DATE:
            return {
                ...state,
                currentDate: dayjs(state.currentDate).add(-1, 'day')
            };
        case NEXT_DATE:
            return {
                ...state,
                currentDate: dayjs(state.currentDate).add(+1, 'day')
            };
        default:
            return state;
    }
}