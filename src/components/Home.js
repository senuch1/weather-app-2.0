import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Home() {
    const { cityName } = useParams()
    const [weather] = useState({ temp: undefined, feels_like: undefined, wind_spee: undefined })

    useEffect(() => {

    })



    const url = 'https://api.openweathermap.org'
    const apiKey = '6989d5496e907af13756cb5af3700b93'

    const getCoordinates = async (cityName) => {
        const req = await fetch(`${url}/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`)
        const response = await req.json()
        const data = response[0]
        return {
            lat: data?.lat,
            lon: data?.lon
        }
    }

    const fetchWeather = async (lat, lon) => {
        if (lat !== undefined && lon !== undefined) {
            const req = await fetch(`${url}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
            const response = await req.json()
            return response
        }
        return {}
    }

    const getWeather = async (cityName) => {
        const coordinates = await getCoordinates(cityName)
        const weather = await fetchWeather(coordinates.lat, coordinates.lon)
        return weather
    }

    return (
        <div>
            <h1>City  {cityName}</h1>
            {weather.temp !== undefined ? <div>
                <h1>{weather.temp} temp</h1>
                <h1>{weather.feels_like} feels like</h1>
                <h1>{weather.wind_spee} wind speed</h1>
            </div> : ''}
        </div>
    )
}

export default Home;