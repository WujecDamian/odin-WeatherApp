import { weatherCityName } from '../ui/getWeatherInfo.js'

let city = document.querySelector('.weather__city-name')
let description = document.querySelector('.weather__description')
let temperature = document.querySelector('.weather__temperature')
let feelsLike = document.querySelector('.weather__feelslike')
let sunset = document.querySelector('.weather__sunset')
let icon = document.querySelector('.weather__icon')

export function renderForecast (
  weatherCity,
  weatherDesc,
  weatherForecastArray,
  weatherForecastDesc,
  weatherSunset,
  weatherTemp,
  weatherTempFeelsLike,
  weatherIcon
) {
  city.innerText = weatherCity
  description.innerText = weatherDesc
  temperature.innerText = weatherTemp
  feelsLike.innerText = weatherTempFeelsLike
  sunset.innerText = weatherSunset
  icon.src = `./assets/icons/${weatherIcon}.svg`
}
