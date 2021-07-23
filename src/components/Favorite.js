import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import CurrentWeather from './SearchBar/components/CurrentWeather/CurrentWeather';
import { useSelector } from 'react-redux';
function Favorite() {
    let location = useLocation();
    console.log(location.pathname);
    let arrWeather;
    const objCurrentWeatherRedux = useSelector(state => {
        return state.root.currentWeather;
    });
    useEffect(() => {


        if (localStorage) {
            arrWeather = JSON.parse(window.localStorage.getItem("city"));
            console.log(arrWeather);
            console.log(objCurrentWeatherRedux.length);

        }
    }, [1])

    return (
        <div>
            {!objCurrentWeatherRedux == "undefinde" ? <CurrentWeather objCurrentWeatherRedux={objCurrentWeatherRedux} /> : null}
        </div>
    )
}

export default Favorite
