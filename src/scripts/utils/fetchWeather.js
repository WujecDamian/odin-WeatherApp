export async function fetchWeather (location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=PK3EGW95R8ZQCJKSXKMQSPS3U`
  )

  if (!response.ok) {
    throw new Error(
      `Weather API error: ${response.status} ${response.statusText}`
    )
  }
  const weather = await response.json()
  console.log(weather)
  return await weather
}
