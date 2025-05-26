import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

import { auth } from '../firebase'
import { useAuthStore } from '@/store/useAuthStore'

export const useAuthListener = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      useAuthStore.getState().setUser(user)
    })

    return () => unsubscribe()
  }, [])
}
