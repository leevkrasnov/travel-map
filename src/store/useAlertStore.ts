import { create } from 'zustand'

type AlertType = 'success' | 'error' | 'info'

interface AlertStoreState {
  type: AlertType
  message: string
  isVisible: boolean
  showAlert: (type: AlertType, message: string, duration?: number) => void
  hideAlert: () => void
}

export const useAlertStore = create<AlertStoreState>((set) => ({
  type: 'info',
  message: '',
  isVisible: false,
  showAlert: (type, message, duration = 5000) => {
    set({ type, message, isVisible: true })
    setTimeout(() => {
      set({ isVisible: false })
    }, duration)
  },
  hideAlert: () => set({ isVisible: false }),
}))
