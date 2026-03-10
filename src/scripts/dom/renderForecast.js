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
  /* update temperature if celsius is set */
  if (currentUnit === 'C') {
    weatherTemp = ((weatherTemp - 32) / 1.8).toFixed(1)
    weatherTempFeelsLike = ((weatherTempFeelsLike - 32) / 1.8).toFixed(1)
  }
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
  cardElementWrapper.className='weather__card--small'
  let dateElement = document.createElement('p')
  let tempMaxElement = document.createElement('p')
  let tempElement = document.createElement('p')
  let tempMinElement = document.createElement('p')
  let tempMax = day.tempmax
  let temp = day.temp
  let tempMin = day.tempmin
  if (currentUnit === 'C') {
    tempMax = ((tempMax - 32) / 1.8).toFixed(1)
    temp = ((temp - 32) / 1.8).toFixed(1)
    tempMin = ((temp - 32) / 1.8).toFixed(1)
  }
  dateElement.innerText = day.datetime.slice(5)
  tempMaxElement.innerText = tempElement.innerText = `H: ${tempMax}`
  tempElement.innerText = tempElement.innerText = temp

  tempMinElement.innerText = `L: ${tempMin}`
  cardElementWrapper.append(
    dateElement,
    tempMaxElement,
    tempElement,
    tempMinElement
  )
  cardsWrapper.append(cardElementWrapper)
}
