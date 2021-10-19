import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    favoriteLaunches: [],
    favoriteLaunchPads: [],
};

const favoritesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADDTOFAVORITELAUNCHES:
            return {
                ...state,
                favoriteLaunches: [
                    ...state.favoriteLaunches,
                    { ...action.payload },
                ],
            };
        case actionTypes.REMOVEFROMFAVORITELAUNCHES:
            return {
                ...state,
                favoriteLaunches: state.favoriteLaunches.filter(
                    (item) =>
                        item.flight_number !== action.payload.flight_number
                ),
            };
        case actionTypes.ADDTOFAVORITELAUNCHPADS:
            return {
                ...state,
                favoriteLaunchPads: [
                    ...state.favoriteLaunchPads,
                    ...action.payload,
                ],
            };
        case actionTypes.REMOVEFROMFAVORITELAUNCHPADS:
            return {
                ...state,
                favoriteLaunchPads: state.favoriteLaunchPads.filter(
                    (item) =>
                        item.flight_number !== action.payload.flight_number
                ),
            };
        default:
            return state;
    }
};

export default favoritesReducer;
