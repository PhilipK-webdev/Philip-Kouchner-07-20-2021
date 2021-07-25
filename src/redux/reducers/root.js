import * as actions from '../constants';

const initialState = {
    currentWeather: [],
    currentForecast: [],
    localStorageArrayCity: [],
    currentSearchCity: "",
    isToAddFavourite: false,
    isFavouriteEmpty: false,
    isToggle: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_CURRENT_WEATHER: {
            return {
                ...state,
                currentWeather: action.payload
            }
            break;
        }
        case actions.SET_CURRENT_FORECAST: {
            return {
                ...state,
                currentForecast: action.payload
            }
            break;
        }
        case actions.DELETE_CITY: {
            return {
                ...state,
                localStorageArrayCity: action.payload
            }
            break;
        }
        case actions.CURRENT_SEARCH_CITY: {
            return {
                ...state,
                currentSearchCity: action.payload
            }
            break;
        }
        case actions.IS_TO_ADD_FAVOURITE: {
            return {
                ...state,
                isToAddFavourite: action.payload
            }
            break;
        }
        case actions.IS_FAVOURITE_EMPTY: {
            return {
                ...state,
                isFavouriteEmpty: action.payload
            }
            break;
        }
        case actions.IS_TOGGLE: {
            return {
                ...state,
                isToggle: action.payload
            }
            break;
        }
        default: return state;
    }
};

export default reducer;