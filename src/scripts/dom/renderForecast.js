import { weatherCityName } from '../ui/getWeatherInfo.js'
import { currentUnit } from '../ui/toggleUnits.js'

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
  /* get from dom */
  let city = document.querySelector('.weather__city-name')
  let description = document.querySelector('.weather__description')
  let temperature = document.querySelector('.weather__temperature')
  let feelsLike = document.querySelector('.weather__feelslike')
  let sunset = document.querySelector('.weather__sunset')
  cardsWrapper.replaceChildren()
  /* update dom */

  city.innerText = weatherCity
  description.innerText = weatherDesc
  temperature.innerText = weatherTemp
  feelsLike.innerText = weatherTempFeelsLike
  sunset.innerText = weatherSunset
  updateIcon(weatherIcon)
  weatherForecastArray.forEach(day => {
    createCard(day)
  })
}
async function updateIcon (condition) {
  let icon = document.querySelector('.weather__icon')

  try {
    const { default: url } = await import(`../../assets/icons/${condition}.svg`)
    icon.src = url
  } catch (error) {
    console.log(`Icon ${condition} not found.`)
    const { default: fallback } = await import('../../assets/icons/unknown.svg')
    icon.src = fallback
  }
}
const cardsWrapper = document.querySelector('.weather__cards--small')
function createCard (day) {
  let cardElementWrapper = document.createElement('div')
  let dateElement = document.createElement('p')
  let tempMaxElement = document.createElement('p')
  let tempElement = document.createElement('p')
  let tempMinElement = document.createElement('p')
  dateElement.innerText = day.datetime.slice(5)
  tempMaxElement.innerText = day.tempmax
  tempElement.innerText = day.temp
  tempMinElement.innerText = day.tempmin
  cardElementWrapper.append(
    dateElement,
    tempMaxElement,
    tempElement,
    tempMinElement
  )
  cardsWrapper.append(cardElementWrapper)
}
