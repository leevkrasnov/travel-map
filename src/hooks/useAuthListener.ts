import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { useAuthStore } from '@/store/authStore'

export const useAuthListener = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      useAuthStore.getState().setUser(user)
      console.log(user)
    })

    return () => unsubscribe()
  }, [])
}
