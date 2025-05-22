import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'

import type { Travel } from '@/types/travelStore.types'

export const addTravel = async (travel: Travel) => {
  const currentUser = auth.currentUser?.uid

  if (currentUser) {
    const travelId = crypto.randomUUID()
    const travelRef = doc(db, 'users', currentUser, 'travels', travelId)
    try {
      await setDoc(travelRef, { ...travel, id: travelId })
    } catch (error) {
      console.error('Ошибка добавления путешествия', error)
      throw error
    }
  }
}
