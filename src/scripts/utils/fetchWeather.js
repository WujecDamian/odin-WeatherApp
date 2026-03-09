export async function fetchWeather (location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=PK3EGW95R8ZQCJKSXKMQSPS3U`
    )
    const weather = await response.json()
    console.log(weather)
    return await weather
  } catch (error) {
    throw new Error(response.error)
  }
}
