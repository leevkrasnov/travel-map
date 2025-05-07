import { create } from 'zustand'
import type { BottomBarStoreState } from '@/types/bottomBarStore.types'

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
}))
