import { create } from 'zustand'
import { User } from 'firebase/auth'

export interface AuthStoreState {
  user: User | null
  displayName: string | null
  isAuthenticated?: boolean
  isLoading?: boolean
  setUser: (user: User | null) => void
  setDisplayName: (name: string | null) => void
}

export const useAuthStore = create<AuthStoreState>((set) => ({
  user: null,
  displayName: null,
  isAuthenticated: false,
  isLoading: true,
  setUser: (user) =>
    set({
      user,
      displayName: user?.displayName ?? null,
      isAuthenticated: !!user,
      isLoading: false,
    }),
  setDisplayName: (name) => set({ displayName: name }),
}))
