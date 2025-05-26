export async function getCoordinates(
  address: string
): Promise<[number, number]> {
  const apiKey = import.meta.env.VITE_YANDEX_MAPS_API_KEY

  const url = `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&format=json&geocode=${encodeURIComponent(
    address
  )}`

  try {
    const response = await fetch(url)

    const data = await response.json()
    const geoObject =
      data.response.GeoObjectCollection.featureMember[0]?.GeoObject

    if (!geoObject || !geoObject.Point?.pos) {
      throw new Error('Координаты не найдены')
    }

    const pos = geoObject.Point.pos
    const [lon, lat] = pos.split(' ').map(Number)
    return [lon, lat]
  } catch (error) {
    console.error('Ошибка при получении координат:', error)
    throw error
  }
}
