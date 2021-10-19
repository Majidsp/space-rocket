import * as actionTypes from "./actionTypes";

export const addToFavoriteLaunches = (item) => {
    return {
        type: actionTypes.ADDTOFAVORITELAUNCHES,
        payload: item,
    };
};

export const removeFromFavoriteLaunches = (item) => {
    return {
        type: actionTypes.REMOVEFROMFAVORITELAUNCHES,
        payload: item,
    };
};

export const addToFavoriteLaunchPads = (item) => {
    return {
        type: actionTypes.ADDTOFAVORITELAUNCHES,
        payload: item,
    };
};

export const removeFromFavoriteLaunchPads = (item) => {
    return {
        type: actionTypes.REMOVEFROMFAVORITELAUNCHES,
        payload: item,
    };
};
