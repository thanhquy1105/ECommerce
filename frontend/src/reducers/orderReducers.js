import {
    CREAT_ORDER_REQUEST,
    CREAT_ORDER_SUCCESS,
    CREAT_ORDER_FAIL,
    CLEAR_ERRORS
} from '../constants/orderConstants'

export const newOrderReducer = (state = {},action) => {
    switch (action.type) {
        case CREAT_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CREAT_ORDER_SUCCESS:
            return {
                loading: false,
                order:action.payload
            }
        case CREAT_ORDER_FAIL:
            return {
                loading: false,
                order: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}