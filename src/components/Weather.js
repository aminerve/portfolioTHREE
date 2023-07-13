import React, { useState } from 'react';
import '../styles/Weather.css'

function WeatherDisplay() {
  const apiKey = '2914917f4abb272f3ad905b4b23f4b94'
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("")

  const getWeather = (event) =>{
    if(event.key === 'Enter'){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`).then(
            response => response.json()
        ).then(
            data=> {
                setWeatherData(data)
                setCity("")
            }
        )
    }
 }

  return (
    <div className='weatherApi'>
        <input 
        className='input'
        placeholder='Enter City...'
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyDown={getWeather}
    
        />
        {typeof weatherData.main === 'undefined' ? (
            <div>
                <p>Enter in a City to get the weather.</p>
            </div>
        ): (
            <div>
                <p className='weathp'><b>City: </b>{weatherData.name}</p>
                <p className='weathp'><b>Temperature: </b>{weatherData.main.temp} °C</p>
                <p className='weathp'><b>Conditions: </b>{weatherData.weather[0].main}</p>
            </div>
        )}
    </div>
  );
}

export default WeatherDisplay;
