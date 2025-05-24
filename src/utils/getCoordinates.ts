// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getCoordinates(yamaps: any, address: string) {
  const result = await yamaps.geocode(address)
  const firstGeoObject = result.geoObjects.get(0)
  const coords = firstGeoObject.geometry.getCoordinates()

  return coords
}
