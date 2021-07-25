

const tempStringForecast = [
    {
        "date": "2021-07-20T07:00:00-05:00",
        "tempture": {
            "Minimum": {
                "Value": 57,
                "Unit": "F",
                "UnitType": 18
            },
            "Maximum": {
                "Value": 76,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "night": {
            "Icon": 5,
            "IconPhrase": "Mostly cloudy w/ showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate"
        }
    },
    {
        "date": "2021-07-21T07:00:00-05:00",
        "tempture": {
            "Minimum": {
                "Value": 57,
                "Unit": "F",
                "UnitType": 18
            },
            "Maximum": {
                "Value": 73,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "night": {
            "Icon": 42,
            "IconPhrase": "Mostly cloudy w/ t-storms",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate"
        }
    },
    {
        "date": "2021-07-22T07:00:00-05:00",
        "tempture": {
            "Minimum": {
                "Value": 57,
                "Unit": "F",
                "UnitType": 18
            },
            "Maximum": {
                "Value": 73,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "night": {
            "Icon": 12,
            "IconPhrase": "Showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate"
        }
    },
    {
        "date": "2021-07-23T07:00:00-05:00",
        "tempture": {
            "Minimum": {
                "Value": 54,
                "Unit": "F",
                "UnitType": 18
            },
            "Maximum": {
                "Value": 73,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "night": {
            "Icon": 12,
            "IconPhrase": "Showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
        }
    },
    {
        "date": "2021-07-24T07:00:00-05:00",
        "tempture": {
            "Minimum": {
                "Value": 53,
                "Unit": "F",
                "UnitType": 18
            },
            "Maximum": {
                "Value": 76,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "night": {
            "Icon": 7,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
        }
    }
]


let forecastWeather = {
    "Headline": {
        "EffectiveDate": "2021-07-25T08:00:00-05:00",
        "EffectiveEpochDate": 1627218000,
        "Severity": 4,
        "Text": "Pleasant Sunday",
        "Category": "mild",
        "EndDate": null,
        "EndEpochDate": null,
        "MobileLink": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/extended-weather-forecast/234000?lang=en-us",
        "Link": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?lang=en-us"
    },
    "DailyForecasts": [
        {
            "Date": "2021-07-20T07:00:00-05:00",
            "EpochDate": 1626782400,
            "Temperature": {
                "Minimum": {
                    "Value": 57,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 76,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 17,
                "IconPhrase": "Partly sunny w/ t-storms",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Night": {
                "Icon": 40,
                "IconPhrase": "Mostly cloudy w/ showers",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Moderate"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?lang=en-us",
            "Link": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?lang=en-us"
        },
        {
            "Date": "2021-07-21T07:00:00-05:00",
            "EpochDate": 1626868800,
            "Temperature": {
                "Minimum": {
                    "Value": 57,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 73,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 17,
                "IconPhrase": "Partly sunny w/ t-storms",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Moderate"
            },
            "Night": {
                "Icon": 42,
                "IconPhrase": "Mostly cloudy w/ t-storms",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Moderate"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=1&lang=en-us",
            "Link": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=1&lang=en-us"
        },
        {
            "Date": "2021-07-22T07:00:00-05:00",
            "EpochDate": 1626955200,
            "Temperature": {
                "Minimum": {
                    "Value": 57,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 73,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 17,
                "IconPhrase": "Partly sunny w/ t-storms",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Moderate"
            },
            "Night": {
                "Icon": 12,
                "IconPhrase": "Showers",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Moderate"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=2&lang=en-us",
            "Link": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=2&lang=en-us"
        },
        {
            "Date": "2021-07-23T07:00:00-05:00",
            "EpochDate": 1627041600,
            "Temperature": {
                "Minimum": {
                    "Value": 54,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 73,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 17,
                "IconPhrase": "Partly sunny w/ t-storms",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Night": {
                "Icon": 12,
                "IconPhrase": "Showers",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=3&lang=en-us",
            "Link": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=3&lang=en-us"
        },
        {
            "Date": "2021-07-24T07:00:00-05:00",
            "EpochDate": 1627128000,
            "Temperature": {
                "Minimum": {
                    "Value": 53,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 76,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 4,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=4&lang=en-us",
            "Link": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/daily-weather-forecast/234000?day=4&lang=en-us"
        }
    ]
}

let mockArrayAutocomplete = [[
    {
        "Version": 1,
        "Key": "234000",
        "Type": "City",
        "Rank": 35,
        "LocalizedName": "San Francisco Coacalco",
        "Country": {
            "ID": "MX",
            "LocalizedName": "Mexico"
        },
        "AdministrativeArea": {
            "ID": "MEX",
            "LocalizedName": "México"
        }
    },
    {
        "Version": 1,
        "Key": "347629",
        "Type": "City",
        "Rank": 35,
        "LocalizedName": "San Francisco",
        "Country": {
            "ID": "US",
            "LocalizedName": "United States"
        },
        "AdministrativeArea": {
            "ID": "CA",
            "LocalizedName": "California"
        }
    },
    {
        "Version": 1,
        "Key": "122459",
        "Type": "City",
        "Rank": 41,
        "LocalizedName": "San Francisco De Macoris",
        "Country": {
            "ID": "DO",
            "LocalizedName": "Dominican Republic"
        },
        "AdministrativeArea": {
            "ID": "06",
            "LocalizedName": "Duarte"
        }
    },
    {
        "Version": 1,
        "Key": "7621",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "San Francisco Solano",
        "Country": {
            "ID": "AR",
            "LocalizedName": "Argentina"
        },
        "AdministrativeArea": {
            "ID": "B",
            "LocalizedName": "Buenos Aires"
        }
    },
    {
        "Version": 1,
        "Key": "3564395",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "San Francisco de Campeche",
        "Country": {
            "ID": "MX",
            "LocalizedName": "Mexico"
        },
        "AdministrativeArea": {
            "ID": "CAM",
            "LocalizedName": "Campeche"
        }
    },
    {
        "Version": 1,
        "Key": "232898",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "San Francisco del Rincón",
        "Country": {
            "ID": "MX",
            "LocalizedName": "Mexico"
        },
        "AdministrativeArea": {
            "ID": "GUA",
            "LocalizedName": "Guanajuato"
        }
    },
    {
        "Version": 1,
        "Key": "3172",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "San Francisco",
        "Country": {
            "ID": "AR",
            "LocalizedName": "Argentina"
        },
        "AdministrativeArea": {
            "ID": "X",
            "LocalizedName": "Cordoba"
        }
    },
    {
        "Version": 1,
        "Key": "113032",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "San Francisco",
        "Country": {
            "ID": "CR",
            "LocalizedName": "Costa Rica"
        },
        "AdministrativeArea": {
            "ID": "H",
            "LocalizedName": "Heredia"
        }
    },
    {
        "Version": 1,
        "Key": "262723",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "San Francisco",
        "Country": {
            "ID": "PH",
            "LocalizedName": "Philippines"
        },
        "AdministrativeArea": {
            "ID": "CEB",
            "LocalizedName": "Cebu"
        }
    },
    {
        "Version": 1,
        "Key": "265727",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "San Francisco",
        "Country": {
            "ID": "PH",
            "LocalizedName": "Philippines"
        },
        "AdministrativeArea": {
            "ID": "QUE",
            "LocalizedName": "Quezon"
        }
    }
]];


let currentWeather = [{
    "LocalObservationDateTime": "2021-07-21T02:10:00-05:00",
    "EpochTime": 1626851400,
    "WeatherText": "A shower",
    "WeatherIcon": 12,
    "HasPrecipitation": true,
    "PrecipitationType": "Rain",
    "IsDayTime": false,
    "Temperature": {
        "Metric": {
            "Value": 15.1,
            "Unit": "C",
            "UnitType": 17
        },
        "Imperial": {
            "Value": 59,
            "Unit": "F",
            "UnitType": 18
        }
    },
    "MobileLink": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/current-weather/234000?lang=en-us",
    "Link": "http://www.accuweather.com/en/mx/san-francisco-coacalco/234000/current-weather/234000?lang=en-us"
}];




const autoComplete = [
    {
        "Version": 1,
        "Key": "303032",
        "Type": "City",
        "Rank": 32,
        "LocalizedName": "Las Palmas de Gran Canaria",
        "Country": {
            "ID": "ES",
            "LocalizedName": "Spain"
        },
        "AdministrativeArea": {
            "ID": "CN",
            "LocalizedName": "Canary Islands"
        }
    },
    {
        "Version": 1,
        "Key": "264877",
        "Type": "City",
        "Rank": 35,
        "LocalizedName": "Las Piñas",
        "Country": {
            "ID": "PH",
            "LocalizedName": "Philippines"
        },
        "AdministrativeArea": {
            "ID": "MNL",
            "LocalizedName": "Metropolitan Manila"
        }
    },
    {
        "Version": 1,
        "Key": "329506",
        "Type": "City",
        "Rank": 35,
        "LocalizedName": "Las Vegas",
        "Country": {
            "ID": "US",
            "LocalizedName": "United States"
        },
        "AdministrativeArea": {
            "ID": "NV",
            "LocalizedName": "Nevada"
        }
    },
    {
        "Version": 1,
        "Key": "119190",
        "Type": "City",
        "Rank": 41,
        "LocalizedName": "Las Tunas",
        "Country": {
            "ID": "CU",
            "LocalizedName": "Cuba"
        },
        "AdministrativeArea": {
            "ID": "10",
            "LocalizedName": "Las Tunas"
        }
    },
    {
        "Version": 1,
        "Key": "300620",
        "Type": "City",
        "Rank": 41,
        "LocalizedName": "Las Anod",
        "Country": {
            "ID": "SO",
            "LocalizedName": "Somalia"
        },
        "AdministrativeArea": {
            "ID": "SO",
            "LocalizedName": "Sool"
        }
    },
    {
        "Version": 1,
        "Key": "305850",
        "Type": "City",
        "Rank": 42,
        "LocalizedName": "Las Rozas de Madrid",
        "Country": {
            "ID": "ES",
            "LocalizedName": "Spain"
        },
        "AdministrativeArea": {
            "ID": "MD",
            "LocalizedName": "Madrid"
        }
    },
    {
        "Version": 1,
        "Key": "5131",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "Las Heras",
        "Country": {
            "ID": "AR",
            "LocalizedName": "Argentina"
        },
        "AdministrativeArea": {
            "ID": "M",
            "LocalizedName": "Mendoza"
        }
    },
    {
        "Version": 1,
        "Key": "231943",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "Las Margaritas",
        "Country": {
            "ID": "MX",
            "LocalizedName": "Mexico"
        },
        "AdministrativeArea": {
            "ID": "CHP",
            "LocalizedName": "Chiapas"
        }
    },
    {
        "Version": 1,
        "Key": "241304",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "Las Choapas",
        "Country": {
            "ID": "MX",
            "LocalizedName": "Mexico"
        },
        "AdministrativeArea": {
            "ID": "VER",
            "LocalizedName": "Veracruz"
        }
    },
    {
        "Version": 1,
        "Key": "329556",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "Las Cruces",
        "Country": {
            "ID": "US",
            "LocalizedName": "United States"
        },
        "AdministrativeArea": {
            "ID": "NM",
            "LocalizedName": "New Mexico"
        }
    }
]
module.exports = { tempStringForecast, forecastWeather, currentWeather, autoComplete };