import React, { useEffect, useState } from "react";
import './style.css'
const Tempapp = () => {
    const [city, setCity] = useState("")
    const [data, setData] = useState(null)
    const [wether, setWether] = useState(null)
    const [wind, setWind] = useState(null)
    const [search, setSearch] = useState("Chandigarh")

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=54fba6614fcbd701d42c6324eaaa85d0`
            const response = await fetch(url)
            const res = await response.json()
            setCity(res.main)
            setData(res.sys)
            setWether(res.weather)
            setWind(res.wind)
        }

        fetchApi();
    }, [search])

    return (
        <div className="con">
            <img id="bg_img" src="bg.jpg" className="w3-round" alt="Norway"></img>
            <div className="titel">
                <h1>Wether Forcast</h1>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="input">
                <input id="input" type='search' placeholder="Search...." style={{ fontSize: "x-lagre" }} className="inputField" onChange={(e) => {
                    setSearch(e.target.value)
                }} />
            </div>

            <div className="card">
                <div className="container">
                    {
                        search === '' ? setSearch("chandigarh") : !city ? (<p>No</p>) : (
                            <>
                                <h1>{search}{" "},{" "}{data.country}</h1>
                                <h1>{city.temp}&deg;C</h1>
                                {
                                    wether.map((e) => {
                                        return <h3>{e.description}</h3>
                                    })
                                }
                                <h3>Max: {city.temp_max}&deg;C{"  "}{"  "}{"    "}Min: {city.temp_min}&deg;C</h3>
                            </>
                        )
                    }
                    <img id="temp_img" src="weather.png" className="w3-round" alt="Norway"></img>
                </div>
            </div>

            <div className="card2">
                <div className="container">
                    {
                        search === '' ? setSearch("chandigarh") : !city ? (<p>No</p>) : (
                            <>
                                <div className="mo">
                                    <p><b>Humidity: {city.humidity}%</b></p>
                                    <p><b>Feels Like: {city.feels_like}&deg;C</b></p>
                                </div>
                                <div className="mo">
                                    <p><b>Wind Speed: {wind.speed}km/h</b></p>
                                    <p><b>Wind Direction: {wind.deg}&deg;</b></p>
                                </div>
                            </>
                        )
                    }
                </div>

            </div>
        </div>
    )
}
export default Tempapp;