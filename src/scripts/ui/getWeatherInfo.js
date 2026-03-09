// ui/getWeatherInfo.js
import { renderForecast } from '../dom/renderForecast.js'
import { currentWeather } from './currentWeather.js'
// Do NOT log or use currentWeather here ↑↑↑

// Only use it inside functions / after search has run

export function updateWeatherInfo () {
  let weatherCity = currentWeather.resolvedAddress
  let weatherDesc = currentWeather.currentConditions.conditions
  let weatherTemp = currentWeather.currentConditions.temp
  let weatherTempFeelsLike = currentWeather.currentConditions.feelslike
  let weatherSunset = currentWeather.currentConditions.sunset
  let weatherIcon = currentWeather.currentConditions.icon || 'clear-day'
  let weatherForecastDesc = currentWeather.description
  let weatherForecastArray = currentWeather.days
  renderForecast(
    weatherCity,
    weatherDesc,
    weatherForecastArray,
    weatherForecastDesc,
    weatherSunset,
    weatherTemp,
    weatherTempFeelsLike,
    weatherIcon
  )
}
