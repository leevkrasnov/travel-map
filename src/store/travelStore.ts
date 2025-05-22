import { create } from 'zustand'

import type { TravelStoreState } from '@/types/travelStore.types'

export const useTravelStore = create<TravelStoreState>((set) => ({
  travel: null,
  setTravel: (travel) => set({ travel }),
}))
