import * as contant from './../contants/index'
import { select } from 'redux-saga/effects';

const initialState = {
    loadding: false,
    title: '',
    page: {
        page: 1,
        total: 0,
    },
    select: true,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case contant.LOADDING:
            {

                return {
                    ...state,
                    loadding: true
                }
            }
        case contant.LOADDING_HIDE:
            {
                return {
                    ...state,
                    loadding: false
                };
            }
        case contant.SET_TITLE:
            {
                return {
                    ...state,
                    title: action.payload
                };
            }

        case contant.SET_PAGE:
            {
                return {
                    ...state,
                    page: action.payload
                };
            }

        case contant.SELECT_PAGE:
            {
                return {
                    ...state,
                    select: action.payload
                };
            }

        default:
            return state
    }
}

export default reducer;