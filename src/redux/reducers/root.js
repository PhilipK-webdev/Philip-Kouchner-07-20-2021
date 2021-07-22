import * as actions from '../constants';

const initialState = {
    currentWeather: [],
    currentForecast: [],
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
        default: return state;
    }
};

export default reducer;