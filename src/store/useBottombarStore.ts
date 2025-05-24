import { create } from 'zustand'

type ActiveModalState = 'home' | 'travelList' | 'travelForm' | 'profile' | null

interface BottomBarStoreState {
  activeModal: ActiveModalState
  animationPhase: 'idle' | 'closing' | 'opening'
  nextModal: ActiveModalState
  startModalChange: (modal: ActiveModalState) => void
  closeAnimation: () => void
  openAnimation: () => void
  reset: () => void
}

export const useBottomBarStore = create<BottomBarStoreState>((set) => ({
  activeModal: null,
  animationPhase: 'idle',
  nextModal: null,
  startModalChange: (modal) =>
    set((state) => {
      if (state.activeModal === null) {
        return {
          activeModal: modal,
          animationPhase: 'opening',
          nextModal: null,
        }
      }
      if (state.activeModal === modal) {
        return {
          animationPhase: 'closing',
          nextModal: null,
        }
      }

      return {
        nextModal: modal,
        animationPhase: 'closing',
      }
    }),
  closeAnimation: () =>
    set((state) => {
      const newModal = state.nextModal
      return {
        activeModal: newModal,
        nextModal: null,
        animationPhase: newModal !== null ? 'opening' : 'idle',
      }
    }),
  openAnimation: () =>
    set(() => {
      return { animationPhase: 'idle' }
    }),
  reset: () =>
    set(() => {
      return { activeModal: null, animationPhase: 'idle', nextModal: null }
    }),
}))
