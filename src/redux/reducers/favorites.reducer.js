import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    favoriteItems: [],
};

const favoritesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADDTOFAVORITE:
            return {
                ...state,
                favoriteItems: [...state.favoriteItems, ...action.payload],
            };
        case actionTypes.REMOVEFROMFAVORITE:
            return {
                ...state,
                favoriteItems: state.favoriteItems.filter(
                    (item) =>
                        item.flight_number !== action.payload.flight_number
                ),
            };
        default:
            return state;
    }
};

export default favoritesReducer;
