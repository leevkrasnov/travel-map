import { create } from 'zustand'

interface MapFocusStoreState {
  coordinates: [number, number] | null
  zoom: number
  setFocus: (coordinates: [number, number], zoom?: number) => void
}

export const useMapFocusStore = create<MapFocusStoreState>((set) => ({
  coordinates: null,
  zoom: 12,
  setFocus: (coordinates, zoom = 12) => set({ coordinates, zoom }),
}))
