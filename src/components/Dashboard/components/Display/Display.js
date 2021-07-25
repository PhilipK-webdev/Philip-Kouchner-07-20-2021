import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import moment from 'moment';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Forecast from '../Forecast/Forecast';
import * as actions from '../../../../redux/actions';
import AutoSearch from "../AutoSearch/AutoSearch";

function Display() {
    const dispatch = useDispatch();
    const [arrayCity, setArrayCity] = useState([]);
    const [searchCity, setSearchCity] = useState("");
    const [keySearch, setKeySearch] = useState();
    const [validString, setIsValidString] = useState(true);
    const currentSearchCityRedux = useSelector(state => {
        return state.root.currentSearchCity;
    });
    const objCurrentWeatherRedux = useSelector(state => {
        return state.root.currentWeather;
    });
    const renderForecastRedux = useSelector(state => {
        return state.root.currentForecast;
    });

    useEffect(() => {
        if (currentSearchCityRedux) {
            submit(null, currentSearchCityRedux);
        } else {
            defaultCity();
        }

    }, [])

    const defaultCity = () => {
        let tempURLToGetCurrentWeather = `http://dataservice.accuweather.com/currentconditions/v1/${process.env.REACT_APP_ID_SEARCH}?apikey=${process.env.REACT_APP_KEY3}`;
        let tempURLToGetForesast = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${process.env.REACT_APP_ID_SEARCH}?apikey=${process.env.REACT_APP_KEY3}`;
        const requestCurrent = axios.get(tempURLToGetCurrentWeather);
        const requestForecast = axios.get(tempURLToGetForesast);
        axios.all([requestCurrent, requestForecast]).then(axios.spread((...response) => {

            const resultCurrentWeather = response[0];
            const resultForecast = response[1];
            if (resultCurrentWeather.data[0].WeatherIcon < 10) {
                resultCurrentWeather.data[0].WeatherIcon = `0${resultCurrentWeather.data[0].WeatherIcon}`;
            }
            let urlIcon = `https://developer.accuweather.com/sites/default/files/${resultCurrentWeather.data[0].WeatherIcon}-s.png`;
            let temp = [];
            temp.push(resultCurrentWeather.data[0].WeatherText);
            temp.push(urlIcon);
            temp.push(resultCurrentWeather.data[0].Temperature.Metric.Value + resultCurrentWeather.data[0].Temperature.Metric.Unit);
            temp.push("Tel Aviv");
            dispatch(actions.setCurrentWeather([...temp]));
            const result = resultForecast.data.DailyForecasts.map((data) => {
                return {
                    IconTheme: `https://developer.accuweather.com/sites/default/files/${data.Night.Icon < 10 ? '0' + data.Night.Icon : data.Night.Icon}-s.png`,
                    date: moment.utc(data.Date).format('MMMM Do YYYY'),
                    temptureMin: data.Temperature.Minimum.Value + data.Temperature.Minimum.Unit,
                    temptureMax: data.Temperature.Maximum.Value + " " + data.Temperature.Maximum.Unit,
                };
            });
            let newArrayForecast = [];
            for (let i = 0; i < 5; i++) {
                newArrayForecast[i] = (Object.values(result[i]));
            }
            dispatch(actions.setCurrentForecast([...newArrayForecast]))
        })).catch(err => console.log(err));


    }
    const onKeyPress = (e) => {
        setSearchCity(e.target.value);
        const userChoice = e.target.value;
        setIsValidString(true);
        if (userChoice.length > 1) {
            const isValid = isValidInput(userChoice);
            if (isValid) {
                setIsValidString(false);
                userGetCity(userChoice).then(res => {
                    let arrayCity = [];
                    setKeySearch(res.data[0].Key);
                    const convert = convertObjCityToArr(res);
                    arrayCity = [...convert];
                    setArrayCity([...arrayCity]);
                }).catch(err => console.log(err));
            } else {
                setIsValidString(true);
            }
        }
    };

    const isValidInput = (inputUser) => {
        var pattern = new RegExp(/^[a-zA-Z0-9- ]*$/);
        var hasNumber = /\d/;
        if (inputUser === "" || hasNumber.test(inputUser) || !pattern.test(inputUser)) {
            return false;
        } else {
            return true;
        }
    }
    const userGetCity = async (userChoice) => {
        const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_KEY3}&q=${userChoice}`;
        const response = await axios(url);
        return response;
    }
    const convertObjCityToArr = (data) => {
        let result = [];
        let tempArrOfNameCity = [];
        for (let i = 0; i < data.data.length; i++) {
            result[i] = (Object.values(data.data[i]));
        }
        for (let i = 0; i < result.length; i++) {
            tempArrOfNameCity[i] = result[i][4];
        }
        return tempArrOfNameCity;
    }

    const submit = (e, cityName = "") => {
        if (e) {
            e.preventDefault();
        }
        let stringSearchCity = searchCity;
        if (cityName) {
            stringSearchCity = cityName;

        }
        dispatch(actions.setCurrentSearchCity(stringSearchCity));
        const urlCurrent = `http://dataservice.accuweather.com/currentconditions/v1/${keySearch}?apikey=${process.env.REACT_APP_KEY3}`;
        const urlForecast = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${keySearch}?apikey=${process.env.REACT_APP_KEY3}`;
        const currentWeather = axios.get(urlCurrent);
        const forecast = axios.get(urlForecast);
        axios.all([currentWeather, forecast]).then(axios.spread((...response) => {
            const resultCurrentWeather = response[0];
            const resultForecast = response[1];

            if (resultCurrentWeather.data[0].WeatherIcon < 10) {
                resultCurrentWeather.data[0].WeatherIcon = `0${resultCurrentWeather.data[0].WeatherIcon}`;
            }
            let urlIcon = `https://developer.accuweather.com/sites/default/files/${resultCurrentWeather.data[0].WeatherIcon}-s.png`;
            let tempArrayCurrentCity = [];
            tempArrayCurrentCity.push(resultCurrentWeather.data[0].WeatherText);
            tempArrayCurrentCity.push(urlIcon);
            tempArrayCurrentCity.push(resultCurrentWeather.data[0].Temperature.Metric.Value + resultCurrentWeather.data[0].Temperature.Metric.Unit);
            tempArrayCurrentCity.push(stringSearchCity);
            dispatch(actions.setCurrentWeather([...tempArrayCurrentCity]));
            const result = resultForecast.data.DailyForecasts.map((data) => {
                return {
                    IconPhrase: `https://developer.accuweather.com/sites/default/files/${data.Night.Icon < 10 ? '0' + data.Night.Icon : data.Night.Icon}-s.png`,
                    date: moment.utc(data.Date).format('MMMM Do YYYY'),
                    temptureMin: data.Temperature.Minimum.Value + data.Temperature.Minimum.Unit,
                    temptureMax: data.Temperature.Maximum.Value + " " + data.Temperature.Maximum.Unit,

                };
            });
            let newArrayForecast = [];
            for (let i = 0; i < 5; i++) {
                newArrayForecast[i] = (Object.values(result[i]));
            }

            dispatch(actions.setCurrentForecast([...newArrayForecast]));
        })).catch(err => console.log(err));

    };
    const onSave = (event, newValue) => {
        setSearchCity(newValue);
    };

    const addToFavorite = (e) => {
        e.preventDefault();
        let arr = [];
        arr.push({
            ID: keySearch,
            name: currentSearchCityRedux ? currentSearchCityRedux : objCurrentWeatherRedux[3],
            weather: objCurrentWeatherRedux[0],
            tempture: objCurrentWeatherRedux[2]
        });
        dispatch(actions.setCityLocal([...arr]));
        dispatch(actions.setIsToAddFavourite(true));
        window.localStorage.setItem("city", JSON.stringify([...arr]));
    }
    return (

        <Grid container >
            <AutoSearch arrayCity={arrayCity} searchCity={searchCity} onKeyPress={onKeyPress} onSave={onSave} submit={submit} validString={validString} />

            <Grid container justifyContent="center">
                <Grid item sx={12} sm={12}>
                    {<CurrentWeather objCurrentWeather={objCurrentWeatherRedux} addToFavorite={addToFavorite} />}
                </Grid>
            </Grid>
            <Grid container justifyContent="center">
                {renderForecastRedux != undefined ? renderForecastRedux.map((data, index) => (
                    <Grid item xs={4} sm={2} style={{ marginLeft: "1%" }} key={index}>
                        <Forecast data={data} key={index} />
                    </Grid>
                )) : null}
            </Grid>
        </Grid>
    )
}

export default Display




