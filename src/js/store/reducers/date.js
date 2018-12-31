import dayjs from 'dayjs';
import {SET_DATE} from "../actions/actionTypes";

const initialState = {
    currentDate: +new Date(),
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_DATE:
            return {
                ...state,
                currentDate: dayjs(state.currentDate).add(action.payload, 'day')
            };
        default:
            return state;
    }
}