import { motion, AnimatePresence } from 'motion/react'

import { useBottomBarStore } from '@/store/useBottombarStore'
import ProfileView from '@/components/home-page/profile-modal/ProfileView'
import TravelFormLayout from '@/components/home-page/travel-form-modal/TravelFormLayout'
import TravelListView from './travel-list-modal/TravelListView'

export default function ModalContainer() {
  const variants = {
    open: { y: 0, opacity: 1 },
    closed: { y: '100%', opacity: 0 },
  }
  const activeModal = useBottomBarStore((state) => state.activeModal)
  const startModalChange = useBottomBarStore((state) => state.startModalChange)
  const animationPhase = useBottomBarStore((state) => state.animationPhase)
  const closeAnimation = useBottomBarStore((state) => state.closeAnimation)
  const openAnimation = useBottomBarStore((state) => state.openAnimation)

  return (
    <AnimatePresence>
      {activeModal && (
        <div className="fixed inset-0 z-10 h-full w-full flex items-end justify-center">
          <motion.div
            className="absolute inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => startModalChange(null)}
          />
          <motion.div
            className="relative h-[80%] mb-14 md:mb-20 w-full overflow-hidden"
            variants={variants}
            initial="closed"
            animate={
              animationPhase === 'opening'
                ? 'open'
                : animationPhase === 'closing'
                ? 'closed'
                : false
            }
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
            onAnimationComplete={(definition) => {
              if (definition === 'closed') closeAnimation()
              if (definition === 'open') openAnimation()
            }}
          >
            {activeModal === 'travelForm' && <TravelFormLayout />}
            {activeModal === 'travelList' && <TravelListView />}
            {activeModal === 'profile' && <ProfileView />}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
