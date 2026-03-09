import { fetchWeather } from './fetchWeather.js'

export async function searchWeather (location) {
  try {
    await fetchWeather(location)
  } catch (error) {
    console.error(error)
    alert('You must give city/country name!')
  }
}
