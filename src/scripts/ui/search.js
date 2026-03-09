import { locationInput } from './getLocationFromUser.js'
import { searchWeather } from '../utils/searchWeather.js'

export const searchButton = document.querySelector('.search__button')

searchButton.addEventListener('click', () => {
  if (locationInput.value != '') {
    searchWeather(locationInput.value)
  } else {
    alert('You must give city/country name!')
  }
})
