export interface Travel {
  travelCountry: string
  travelCity: string
  travelDateStart: string
  travelDateEnd: string
}

export interface TravelStoreState {
  travel: Travel | null
  setTravel: (travel: Travel) => void
}
