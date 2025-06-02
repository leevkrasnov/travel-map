import { create } from 'zustand'

interface SearchCityState {
  query: string
  setQuery: (value: string) => void
  clearQuery: () => void
}

export const useSearchCityStore = create<SearchCityState>((set) => ({
  query: '',
  setQuery: (value) => set({ query: value }),
  clearQuery: () => set({ query: '' }),
}))
