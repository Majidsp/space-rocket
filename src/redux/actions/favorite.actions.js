import * as actionTypes from "./actionTypes";

export const addToFavorites = (item) => {
    return {
        type: actionTypes.ADDTOFAVORITE,
        payload: item,
    };
};

export const removeFromFavorites = (item) => {
    return {
        type: actionTypes.REMOVEFROMFAVORITE,
        payload: item,
    };
};
