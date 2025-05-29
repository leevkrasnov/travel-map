export async function getCoordinates(
  address: string
): Promise<[number, number] | null> {
  const apiKey = import.meta.env.VITE_YANDEX_MAPS_API_KEY

  const url = `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&format=json&geocode=${encodeURIComponent(
    address
  )}`

  try {
    const response = await fetch(url)

    const data = await response.json()
    const geoObject =
      data.response.GeoObjectCollection.featureMember[0]?.GeoObject

    const kind = geoObject?.metaDataProperty?.GeocoderMetaData?.kind || ''
    const pos = geoObject?.Point?.pos

    if (kind !== 'locality' || !pos) {
      return null
    }

    const [lon, lat] = pos.split(' ').map(Number)
    return [lon, lat]
  } catch (error) {
    console.error('Ошибка при получении координат:', error)
    throw error
  }
}
