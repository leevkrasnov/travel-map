export const getWeather = async () => {
  const apiKey = '6a25a3fffb13448cbce82014250406' // Ваш API-ключ
  const city = 'Moscow'
  const lang = 'ru'
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=${lang}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()

    const temperature = data.current.temp_c
    const condition = data.current.condition.text
    console.log(
      `Температура в ${city}: ${temperature}°C, Состояние: ${condition}`
    )

    // Возвращаем данные для использования в других частях приложения
    return {
      city: data.location.name,
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
      humidity: data.current.humidity,
      wind_kph: data.current.wind_kph,
    }
  } catch (error) {
    console.error('Ошибка при запросе:', error)
    throw error // Пробрасываем ошибку для обработки в вызывающем коде
  }
}

// Пример вызова функции
getWeather()
  .then((weatherData) => {
    console.log('Полученные данные:', weatherData)
  })
  .catch((error) => {
    console.error('Ошибка в getWeather:', error)
  })
