import * as actions from './constants';

export const setCurrentWeather = data => {
    return {
        type: actions.SET_CURRENT_WEATHER,
        payload: data
    }
}
export const setCurrentForecast = data => {
    return {
        type: actions.SET_CURRENT_FORECAST,
        payload: data
    }
}