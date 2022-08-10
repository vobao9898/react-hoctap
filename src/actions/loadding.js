import * as contant from '../contants/index';

export const loaddingShow = () => {
    return {
        type: contant.LOADDING,

    }
}

export const loaddingHide = () => {
    return {
        type: contant.LOADDING_HIDE,

    }
}

export const setTitle = (data) => {
    return {
        type: contant.SET_TITLE,
        payload: data
    }
}

export const setPages = (data) => {
    return {
        type: contant.SET_PAGE,
        payload: data
    }
}

export const selectPages = (data) => {
    return {
        type: contant.SELECT_PAGE,
        payload: data
    }
}


export const noSearch = (data) => {
    return {
        type: contant.NO_SEARCH,
        payload: data
    }
}