import React, { useEffect, useState } from 'react'
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Autocomplete from '@material-ui/lab/Autocomplete';
import ButtonSearch from '../Button/ButtonSearch';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import axios from "axios";
import moment from 'moment';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Forecast from '../Forecast/Forecast';
import * as actions from '../../../../redux/actions';
import { tempStringForecast, forecastWeather, currentWeather } from "./constants";

function FieldSearch() {
    const dispatch = useDispatch();
    let location = useLocation();
    let apiKey = "";
    let keySearchTemp = "";
    const getApiKey = (function () {
        return {
            privateMethodEncapsulated: function () {
                apiKey = "Uk0bwbjCauPfqnSGqo4xvT3CNMBOTsGQ";
                return apiKey;
            }
        }
    })();

    const getKeySearch = (function () {
        return {
            privateMethodEncapsulated: function () {
                keySearchTemp = "215854";
                return keySearchTemp;
            }
        }
    })();

    const [arrayCity, setArrayCity] = useState([]);
    const [searchCity, setSearchCity] = useState("");
    const [keySearch, setKeySearch] = useState();
    const objCurrentWeatherRedux = useSelector(state => {
        return state.root.currentWeather;
    });
    const [renderForecast, setRenderForecast] = useState();
    const renderForecastRedux = useSelector(state => {
        return state.root.currentForecast;
    })

    useEffect(() => {
        console.log(location.pathname);
        defaultCity();
    }, [])

    const defaultCity = () => {

        // let tempURLToGetCurrentWeather = `http://dataservice.accuweather.com/currentconditions/v1/${getKeySearch.privateMethodEncapsulated()}?apikey=${getApiKey.privateMethodEncapsulated()}`;
        // let tempURLToGetForesast = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${getKeySearch.privateMethodEncapsulated()}?apikey=${getApiKey.privateMethodEncapsulated()}`;
        // const requestCurrent = axios.get(tempURLToGetCurrentWeather);
        // const requestForecast = axios.get(tempURLToGetForesast);
        // axios.all([requestCurrent, requestForecast]).then(axios.spread((...response) => {

        //     const resultOne = response[0];
        //     const resultTwo = response[1];
        //     if (resultOne.data[0].WeatherIcon < 10) {
        //         resultOne.data[0].WeatherIcon = `0${resultOne.data[0].WeatherIcon}`;
        //     }
        //     let urlIcon = `https://developer.accuweather.com/sites/default/files/${resultOne.data[0].WeatherIcon}-s.png`;
        //     let temp = [];
        //     temp.push(resultOne.data[0].WeatherText);
        //     temp.push(urlIcon);
        //     temp.push(resultOne.data[0].Temperature.Metric.Value + resultOne.data[0].Temperature.Metric.Unit);
        //     dispatch(actions.setCurrentWeather([...temp]));
        //     const result = resultTwo.data.DailyForecasts.map((data) => {
        //         return {
        //             IconPhrase: data.Night.IconPhrase,
        //             date: moment.utc(data.Date).format('MMMM Do YYYY, h:mm:ss a'),
        //             temptureMin: data.Temperature.Minimum.Value + data.Temperature.Minimum.Unit,
        //             temptureMin: data.Temperature.Maximum.Value + " " + data.Temperature.Maximum.Unit,
        //         };
        //     });

        //     let newArrayForecast = [];
        //     for (let i = 0; i < 5; i++) {
        //         newArrayForecast[i] = (Object.values(result[i]));
        //     }
        //     // setRenderForecast(newArrayForecast);
        //     dispatch(actions.setCurrentForecast([...newArrayForecast]))
        // })).catch(err => console.log(err));
        if (currentWeather[0].WeatherIcon < 10) {
            currentWeather[0].WeatherIcon = `0${currentWeather[0].WeatherIcon}`;
        }
        let urlIcon = `https://developer.accuweather.com/sites/default/files/${currentWeather[0].WeatherIcon}-s.png`;
        let temp = [];
        temp.push(currentWeather[0].WeatherText);
        temp.push(urlIcon);
        temp.push(currentWeather[0].Temperature.Metric.Value + currentWeather[0].Temperature.Metric.Unit);
        temp.push("Tel Aviv");
        dispatch(actions.setCurrentWeather([...temp]));

    }
    const onKeyPress = (e) => {
        setSearchCity(e.target.value);
        const userChoice = e.target.value;
        if (userChoice.length > 1) {
            userGetCity(userChoice).then(res => {
                let arrayCity = [];
                setKeySearch(res.data[0].Key);
                const convert = convertObjCityToArr(res);
                arrayCity = [...convert];
                setArrayCity([...arrayCity]);
            }).catch(err => console.log(err));
        }
    };
    const userGetCity = async (userChoice) => {
        const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${getApiKey.privateMethodEncapsulated()}&q=${userChoice}`;
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
    const getCurrentWeather = async (keySearch) => {
        const url = `http://dataservice.accuweather.com/currentconditions/v1/${keySearch}?apikey=${getApiKey.privateMethodEncapsulated()}`;
        const responseCurrentWeather = await axios(url);
        return responseCurrentWeather;
    }

    const getForecast = async (keySearch) => {
        const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${keySearch}?apikey=${getApiKey.privateMethodEncapsulated()}`;
        const responseForecast = await axios(url);
        return responseForecast;
    }
    const submit = (e) => {
        e.preventDefault();
        // const currentWeather = getCurrentWeather(keySearch);
        // const forecast = getForecast(keySearch);
        // currentWeather.then(res => {
        //     console.log(res);
        //     if (res.data[0].WeatherIcon < 10) {
        //         res.data[0].WeatherIcon = `0${res.data[0].WeatherIcon}`;
        //     }
        //     let urlIcon = `https://developer.accuweather.com/sites/default/files/${res.data[0].WeatherIcon}-s.png`;
        //     let temp = [];
        //     temp.push(res.data[0].WeatherText);
        //     temp.push(urlIcon);
        //     temp.push(res.data[0].Temperature.Metric.Value + res.data[0].Temperature.Metric.Unit);
        //     dispatch(actions.setCurrentWeather([...temp]));
        // }).catch(err => console.log(err));
        // forecast.then(res => {
        //     const result = res.data.DailyForecasts.map((data) => {
        //         return {
        // 
        //             date: moment.utc(data.Date).format('MMMM Do YYYY'),
        // IconPhrase: data.Night.IconPhrase,
        //             temptureMin: data.Temperature.Minimum.Value + data.Temperature.Minimum.Unit,
        //             temptureMin: data.Temperature.Maximum.Value + " " + data.Temperature.Maximum.Unit,
        //             
        //         };
        //     });
        //     let newArrayForecast = [];
        //     for (let i = 0; i < 5; i++) {
        //         newArrayForecast[i] = (Object.values(result[i]));
        //     }
        //     // setRenderForecast(newArrayForecast);
        //     dispatch(actions.setCurrentForecast([...newArrayForecast]))
        // }).catch(err => console.log(err));
        const result = tempStringForecast.map((data) => {
            return {
                IconTheme: data.night.Icon < 10 ? `https://developer.accuweather.com/sites/default/files/0${data.night.Icon}-s.png` :
                    `https://developer.accuweather.com/sites/default/files/${data.night.Icon}-s.png`,
                date: moment.utc(data.date).format('MMMM Do YYYY'),
                temptureMin: data.tempture.Minimum.Value + data.tempture.Minimum.Unit,
                temptureMin: data.tempture.Maximum.Value + " " + data.tempture.Maximum.Unit,

            };
        });
        let newArrayForecast = [];
        for (let i = 0; i < 5; i++) {
            newArrayForecast[i] = (Object.values(result[i]));
        }
        // setRenderForecast(newArrayForecast);
        dispatch(actions.setCurrentForecast([...newArrayForecast]))
        if (searchCity !== "") {
            setSearchCity("");
        }
    };
    const onSave = (event, newValue) => {
        setSearchCity(newValue);
    };

    let arr = [];
    const addToFavorite = (e) => {
        e.preventDefault();
        arr.push({
            ID: 24032,
            name: "Tel Aviv",
            weather: objCurrentWeatherRedux[0],
            tempture: objCurrentWeatherRedux[2]
        })
        arr.push({
            ID: 24032,
            name: "San Francisco",
            weather: objCurrentWeatherRedux[0],
            tempture: objCurrentWeatherRedux[2]
        });
        window.localStorage.setItem("city", JSON.stringify(arr));
    }
    return (
        <Grid container xs={12}>
            <Grid container xs={12}>
                <Grid container xs={12} sm={10}>
                    <FormControl variant="outlined" style={{ width: "80%" }}>
                        <Autocomplete
                            options={arrayCity}
                            id="controlled-demo"
                            value={searchCity}
                            getOptionLabel={(option) => option}
                            onKeyUp={onKeyPress}
                            onChange={onSave}
                            renderInput={(params) => <TextField {...params} margin="normal" variant="outlined" />}
                            style={{ marginBottom: "2%", marginLeft: "10%" }}
                        />
                    </FormControl>
                </Grid>
                <Grid item style={{ marginTop: "25px" }} xs sm={2}  >
                    <ButtonSearch submit={submit} />
                </Grid>
            </Grid>
            <Grid container xs={12} justify="center">
                <Grid item sx={12} sm={12}>
                    {<CurrentWeather objCurrentWeather={objCurrentWeatherRedux} addToFavorite={addToFavorite} />}
                </Grid>
            </Grid>
            <Grid container xs={12} justifyContent="center">
                {renderForecastRedux != undefined ? renderForecastRedux.map(data => (
                    <Grid item xs={4} sm={2} style={{ marginLeft: "1%" }}>
                        <Forecast data={data} />
                    </Grid>
                )) : null}
            </Grid>
        </Grid>
    )
}

export default FieldSearch



