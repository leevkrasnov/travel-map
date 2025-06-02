import { create } from 'zustand'

export type Travel = {
  id?: string
  travelCountry: string
  travelCity: string
  travelDateStart: string
  travelDateEnd: string
  coordinates: [number, number] | null
}

interface TravelStoreState {
  travels: Travel[]
  setTravels: (travels: Travel[]) => void
  addTravelToStore: (travel: Travel) => void
  clearTravels: () => void
  removeTravelFromStore: (id: string) => void
}

export const useTravelStore = create<TravelStoreState>((set) => ({
  travels: [],
  setTravels: (travels) => set({ travels }),
  addTravelToStore: (travel) =>
    set((state) => ({ travels: [...state.travels, travel] })),
  clearTravels: () => set({ travels: [] }),
  removeTravelFromStore: (id: string) =>
    set((state) => ({
      travels: state.travels.filter((travel) => travel.id !== id),
    })),
}))
