import * as actions from '../constants';

const initialState = {
    currentWeather: [],
    currentForecast: [],
    localStorageArrayCity: [],
    currentSearchCity: "",
    isToAddFavourite: false,
    isFavouriteEmpty: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_CURRENT_WEATHER: {
            return {
                ...state,
                currentWeather: action.payload
            }

        }
        case actions.SET_CURRENT_FORECAST: {
            return {
                ...state,
                currentForecast: action.payload
            }

        }
        case actions.DELETE_CITY: {
            return {
                ...state,
                localStorageArrayCity: action.payload
            }

        }
        case actions.CURRENT_SEARCH_CITY: {
            return {
                ...state,
                currentSearchCity: action.payload
            }

        }
        case actions.IS_TO_ADD_FAVOURITE: {
            return {
                ...state,
                isToAddFavourite: action.payload
            }

        }
        case actions.IS_FAVOURITE_EMPTY: {
            return {
                ...state,
                isFavouriteEmpty: action.payload
            }

        }
        default: return state;
    }
};

export default reducer;