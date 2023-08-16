import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Search() {
    const navigate = useNavigate()
    const [cityName, setCityName] = useState('')
    const [weather, setWeather] = useState({ temp: undefined, feels_like: undefined, wind_spee: undefined })

    const onClick = () => {
        console.log(cityName)
        navigate(`/${cityName}`)
    }

    const handleChange = e => {
        setCityName(e.target.value)
    }

    return (
        <div>
            <div>
                <input type='text' value={cityName} onChange={handleChange} />
                <button onClick={onClick}>Поиск</button>
            </div>
        </div>
    )
}