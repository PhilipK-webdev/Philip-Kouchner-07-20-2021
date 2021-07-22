import React, { useEffect, useState } from 'react'
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Autocomplete from '@material-ui/lab/Autocomplete';
import ButtonSearch from '../Button/ButtonSearch';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import moment from 'moment';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Forecast from '../Forecast/Forecast';
import * as actions from '../../../../redux/actions';

function FieldSearch() {
    const dispatch = useDispatch();
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
        console.log('state ? ', state);
        return state.root.currentWeather;
    })
    const [renderForecast, setRenderForecast] = useState();

    useEffect(() => {
        defaultCity();
    }, [])

    const defaultCity = () => {

        let tempURLToGetCurrentWeather = `http://dataservice.accuweather.com/currentconditions/v1/${getKeySearch.privateMethodEncapsulated()}?apikey=${getApiKey.privateMethodEncapsulated()}`;
        let tempURLToGetForesast = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${getKeySearch.privateMethodEncapsulated()}?apikey=${getApiKey.privateMethodEncapsulated()}`;
        const requestCurrent = axios.get(tempURLToGetCurrentWeather);
        const requestForecast = axios.get(tempURLToGetForesast);
        axios.all([requestCurrent, requestForecast]).then(axios.spread((...response) => {

            const resultOne = response[0];
            const resultTwo = response[1];
            if (resultOne.data[0].WeatherIcon < 10) {
                resultOne.data[0].WeatherIcon = `0${resultOne.data[0].WeatherIcon}`;
            }
            let urlIcon = `https://developer.accuweather.com/sites/default/files/${resultOne.data[0].WeatherIcon}-s.png`;
            let temp = [];
            temp.push(resultOne.data[0].WeatherText);
            temp.push(urlIcon);
            temp.push(resultOne.data[0].Temperature.Metric.Value + resultOne.data[0].Temperature.Metric.Unit);
            dispatch(actions.setCurrentWeather([...temp]));
            const result = resultTwo.data.DailyForecasts.map((data) => {
                return {
                    date: moment.utc(data.Date).format('MMMM Do YYYY, h:mm:ss a'),
                    temptureMin: data.Temperature.Minimum.Value + data.Temperature.Minimum.Unit,
                    temptureMin: data.Temperature.Maximum.Value + " " + data.Temperature.Maximum.Unit,
                    IconPhrase: data.Night.IconPhrase

                };
            });
            let newArrayForecast = [];
            for (let i = 0; i < 5; i++) {
                newArrayForecast[i] = (Object.values(result[i]));
            }
            setRenderForecast(newArrayForecast);
        })).catch(err => console.log(err));


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
        // currentWeather.then(res => console.log(res)).catch(err => console.log(err));
        // forecast.then(res => console.log(res)).catch(err => console.log(err));






        if (searchCity !== "") {
            setSearchCity("");
        }
    };
    const onSave = (event, newValue) => {
        setSearchCity(newValue);
    };
    return (
        <Grid container xs={12}>
            <Grid container xs={12} >
                <Grid container xs={12} sm={10}>
                    <FormControl variant="outlined" style={{ width: "90%" }}>
                        <Autocomplete
                            options={arrayCity}
                            id="controlled-demo"
                            value={searchCity}
                            getOptionLabel={(option) => option}
                            onKeyUp={onKeyPress}
                            onChange={onSave}
                            renderInput={(params) => <TextField {...params} margin="normal" variant="outlined" />}
                            style={{ marginBottom: "25px" }}
                        />
                    </FormControl>
                </Grid>
                <Grid item style={{ marginTop: "17px" }} xs={12} sm={2}>
                    <ButtonSearch submit={submit} />
                </Grid>
            </Grid>
            <Grid container xs={12} style={{ marginTop: "5%" }}>
                <Grid item sx={12} sm={12}>
                    <CurrentWeather objCurrentWeather={objCurrentWeatherRedux} />
                </Grid>
            </Grid>
            <Grid container xs={12}>
                {renderForecast != undefined ? renderForecast.map(data => (
                    <Grid item xs={4} sm={2}>
                        <Forecast data={data} />
                    </Grid>
                )) : null}
            </Grid>
        </Grid>
    )
}

export default FieldSearch

// let forecastWeather = {
//     "Headline": {
//         "EffectiveDate": "2021-07-25T08:00:00-05:00",
//         "EffectiveEpochDate": 1627218000,
//         "Severity": 4,
//         "Text": "Pleasant Sunday",
//         "Category": "mild",
//         "EndDate": null,
//         "EndEpochDate": null,
//         "MobileLink": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/extended-weather-forecast/234000?lang=en-us",
//         "Link": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?lang=en-us"
//     },
//     "DailyForecasts": [
//         {
//             "Date": "2021-07-20T07:00:00-05:00",
//             "EpochDate": 1626782400,
//             "Temperature": {
//                 "Minimum": {
//                     "Value": 57,
//                     "Unit": "F",
//                     "UnitType": 18
//                 },
//                 "Maximum": {
//                     "Value": 76,
//                     "Unit": "F",
//                     "UnitType": 18
//                 }
//             },
//             "Day": {
//                 "Icon": 17,
//                 "IconPhrase": "Partly sunny w/ t-storms",
//                 "HasPrecipitation": true,
//                 "PrecipitationType": "Rain",
//                 "PrecipitationIntensity": "Light"
//             },
//             "Night": {
//                 "Icon": 40,
//                 "IconPhrase": "Mostly cloudy w/ showers",
//                 "HasPrecipitation": true,
//                 "PrecipitationType": "Rain",
//                 "PrecipitationIntensity": "Moderate"
//             },
//             "Sources": [
//                 "AccuWeather"
//             ],
//             "MobileLink": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?lang=en-us",
//             "Link": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?lang=en-us"
//         },
//         {
//             "Date": "2021-07-21T07:00:00-05:00",
//             "EpochDate": 1626868800,
//             "Temperature": {
//                 "Minimum": {
//                     "Value": 57,
//                     "Unit": "F",
//                     "UnitType": 18
//                 },
//                 "Maximum": {
//                     "Value": 73,
//                     "Unit": "F",
//                     "UnitType": 18
//                 }
//             },
//             "Day": {
//                 "Icon": 17,
//                 "IconPhrase": "Partly sunny w/ t-storms",
//                 "HasPrecipitation": true,
//                 "PrecipitationType": "Rain",
//                 "PrecipitationIntensity": "Moderate"
//             },
//             "Night": {
//                 "Icon": 42,
//                 "IconPhrase": "Mostly cloudy w/ t-storms",
//                 "HasPrecipitation": true,
//                 "PrecipitationType": "Rain",
//                 "PrecipitationIntensity": "Moderate"
//             },
//             "Sources": [
//                 "AccuWeather"
//             ],
//             "MobileLink": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=1&lang=en-us",
//             "Link": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=1&lang=en-us"
//         },
//         {
//             "Date": "2021-07-22T07:00:00-05:00",
//             "EpochDate": 1626955200,
//             "Temperature": {
//                 "Minimum": {
//                     "Value": 57,
//                     "Unit": "F",
//                     "UnitType": 18
//                 },
//                 "Maximum": {
//                     "Value": 73,
//                     "Unit": "F",
//                     "UnitType": 18
//                 }
//             },
//             "Day": {
//                 "Icon": 17,
//                 "IconPhrase": "Partly sunny w/ t-storms",
//                 "HasPrecipitation": true,
//                 "PrecipitationType": "Rain",
//                 "PrecipitationIntensity": "Moderate"
//             },
//             "Night": {
//                 "Icon": 12,
//                 "IconPhrase": "Showers",
//                 "HasPrecipitation": true,
//                 "PrecipitationType": "Rain",
//                 "PrecipitationIntensity": "Moderate"
//             },
//             "Sources": [
//                 "AccuWeather"
//             ],
//             "MobileLink": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=2&lang=en-us",
//             "Link": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=2&lang=en-us"
//         },
//         {
//             "Date": "2021-07-23T07:00:00-05:00",
//             "EpochDate": 1627041600,
//             "Temperature": {
//                 "Minimum": {
//                     "Value": 54,
//                     "Unit": "F",
//                     "UnitType": 18
//                 },
//                 "Maximum": {
//                     "Value": 73,
//                     "Unit": "F",
//                     "UnitType": 18
//                 }
//             },
//             "Day": {
//                 "Icon": 17,
//                 "IconPhrase": "Partly sunny w/ t-storms",
//                 "HasPrecipitation": true,
//                 "PrecipitationType": "Rain",
//                 "PrecipitationIntensity": "Light"
//             },
//             "Night": {
//                 "Icon": 12,
//                 "IconPhrase": "Showers",
//                 "HasPrecipitation": true,
//                 "PrecipitationType": "Rain",
//                 "PrecipitationIntensity": "Light"
//             },
//             "Sources": [
//                 "AccuWeather"
//             ],
//             "MobileLink": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=3&lang=en-us",
//             "Link": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=3&lang=en-us"
//         },
//         {
//             "Date": "2021-07-24T07:00:00-05:00",
//             "EpochDate": 1627128000,
//             "Temperature": {
//                 "Minimum": {
//                     "Value": 53,
//                     "Unit": "F",
//                     "UnitType": 18
//                 },
//                 "Maximum": {
//                     "Value": 76,
//                     "Unit": "F",
//                     "UnitType": 18
//                 }
//             },
//             "Day": {
//                 "Icon": 4,
//                 "IconPhrase": "Intermittent clouds",
//                 "HasPrecipitation": true,
//                 "PrecipitationType": "Rain",
//                 "PrecipitationIntensity": "Light"
//             },
//             "Night": {
//                 "Icon": 34,
//                 "IconPhrase": "Mostly clear",
//                 "HasPrecipitation": false
//             },
//             "Sources": [
//                 "AccuWeather"
//             ],
//             "MobileLink": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=4&lang=en-us",
//             "Link": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=4&lang=en-us"
//         }
//     ]
// }

// let tempStringForecast = [
//     {
//         "date": "2021-07-20T07:00:00-05:00",
//         "tempture": {
//             "Minimum": {
//                 "Value": 57,
//                 "Unit": "F",
//                 "UnitType": 18
//             },
//             "Maximum": {
//                 "Value": 76,
//                 "Unit": "F",
//                 "UnitType": 18
//             }
//         },
//         "night": {
//             "Icon": 40,
//             "IconPhrase": "Mostly cloudy w/ showers",
//             "HasPrecipitation": true,
//             "PrecipitationType": "Rain",
//             "PrecipitationIntensity": "Moderate"
//         }
//     },
//     {
//         "date": "2021-07-21T07:00:00-05:00",
//         "tempture": {
//             "Minimum": {
//                 "Value": 57,
//                 "Unit": "F",
//                 "UnitType": 18
//             },
//             "Maximum": {
//                 "Value": 73,
//                 "Unit": "F",
//                 "UnitType": 18
//             }
//         },
//         "night": {
//             "Icon": 42,
//             "IconPhrase": "Mostly cloudy w/ t-storms",
//             "HasPrecipitation": true,
//             "PrecipitationType": "Rain",
//             "PrecipitationIntensity": "Moderate"
//         }
//     },
//     {
//         "date": "2021-07-22T07:00:00-05:00",
//         "tempture": {
//             "Minimum": {
//                 "Value": 57,
//                 "Unit": "F",
//                 "UnitType": 18
//             },
//             "Maximum": {
//                 "Value": 73,
//                 "Unit": "F",
//                 "UnitType": 18
//             }
//         },
//         "night": {
//             "Icon": 12,
//             "IconPhrase": "Showers",
//             "HasPrecipitation": true,
//             "PrecipitationType": "Rain",
//             "PrecipitationIntensity": "Moderate"
//         }
//     },
//     {
//         "date": "2021-07-23T07:00:00-05:00",
//         "tempture": {
//             "Minimum": {
//                 "Value": 54,
//                 "Unit": "F",
//                 "UnitType": 18
//             },
//             "Maximum": {
//                 "Value": 73,
//                 "Unit": "F",
//                 "UnitType": 18
//             }
//         },
//         "night": {
//             "Icon": 12,
//             "IconPhrase": "Showers",
//             "HasPrecipitation": true,
//             "PrecipitationType": "Rain",
//             "PrecipitationIntensity": "Light"
//         }
//     },
//     {
//         "date": "2021-07-24T07:00:00-05:00",
//         "tempture": {
//             "Minimum": {
//                 "Value": 53,
//                 "Unit": "F",
//                 "UnitType": 18
//             },
//             "Maximum": {
//                 "Value": 76,
//                 "Unit": "F",
//                 "UnitType": 18
//             }
//         },
//         "night": {
//             "Icon": 34,
//             "IconPhrase": "Mostly clear",
//             "HasPrecipitation": false
//         }
//     }
// ];