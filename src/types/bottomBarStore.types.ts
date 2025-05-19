type ActiveModalState = 'home' | 'travelList' | 'travelForm' | 'profile' | null

export interface BottomBarStoreState {
  activeModal: ActiveModalState
  animationPhase: 'idle' | 'closing' | 'opening'
  nextModal: ActiveModalState
  startModalChange: (modal: ActiveModalState) => void
  closeAnimation: () => void
  openAnimation: () => void
  reset: () => void
}
