import { create } from 'zustand'

interface LoadingStoreState {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export const useLoadingStore = create<LoadingStoreState>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
}))
