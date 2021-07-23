import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
function Favorite() {
    let location = useLocation();
    console.log(location.pathname);
    let arrWeather;

    useEffect(() => {
        if (localStorage) {
            arrWeather = JSON.parse(window.localStorage.getItem("city"));
            console.log(arrWeather);
        }
    }, [])

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default Favorite
