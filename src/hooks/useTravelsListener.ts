import { useEffect } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { auth, db } from '@/firebase'
import { useTravelStore } from '@/store/useTravelStore'
import type { Travel } from '@/store/useTravelStore'

export const useTravelsListener = () => {
  useEffect(() => {
    const currentUser = auth.currentUser?.uid
    if (!currentUser) return

    const travelsRef = collection(db, 'users', currentUser, 'travels')

    const unsub = onSnapshot(travelsRef, (snapshot) => {
      const travels: Travel[] = snapshot.docs.map((doc) => doc.data() as Travel)
      useTravelStore.getState().setTravels(travels)
    })

    return () => unsub()
  }, [])
}
