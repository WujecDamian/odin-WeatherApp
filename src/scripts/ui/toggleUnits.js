import { updateWeatherInfo } from './getWeatherInfo.js'

export let currentUnit = 'C'

function toggleUnits () {
  if (currentUnit === 'C') {
    currentUnit = 'F'
  } else {
    currentUnit = 'C'
  }
  updateWeatherInfo()
}

export const toggleButton = document.querySelector('.unit__toggle')
toggleButton.addEventListener('click', toggleUnits)
