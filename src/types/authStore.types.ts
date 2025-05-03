import { User } from 'firebase/auth'

export interface AuthStoreState {
  user: User | null
  isAuthenticated?: boolean
  isLoading?: boolean
  setUser: (user: User | null) => void
}
