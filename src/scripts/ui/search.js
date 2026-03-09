import { locationInput } from './getLocationFromUser.js'
import { searchWeather } from '../utils/searchWeather.js'
import { updateWeatherInfo } from './getWeatherInfo.js'
export const searchButton = document.querySelector('.search__button')
export function search () {
  if (locationInput.value != '') {
    searchWeather(locationInput.value)
  } else {
    alert('You must give city/country name!')
  }
}
searchButton.addEventListener('click', () => {
  search()
})
