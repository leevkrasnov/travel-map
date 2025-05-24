import { doc, setDoc, collection, getDocs } from 'firebase/firestore'

import { auth, db } from '../firebase'
import { useTravelStore } from '@/store/useTravelStore'

import type { Travel } from '@/store/useTravelStore'

export const addTravelToFirestore = async (travel: Travel) => {
  const currentUser = auth.currentUser?.uid

  if (currentUser) {
    try {
      const travelId = crypto.randomUUID()
      const travelRef = doc(db, 'users', currentUser, 'travels', travelId)

      await setDoc(travelRef, { ...travel, id: travelId })
    } catch (error) {
      console.error('Ошибка добавления путешествия', error)
      throw error
    }
  }
}

export const getTravelsFromFirestore = async () => {
  const currentUser = auth.currentUser?.uid

  if (currentUser) {
    try {
      const travelsRef = collection(db, 'users', currentUser, 'travels')
      const snapshot = await getDocs(travelsRef)

      const travels: Travel[] = snapshot.docs.map((doc) => doc.data() as Travel)

      useTravelStore.getState().setTravels(travels)
    } catch (error) {
      console.error('Ошибка при загрузке поездок:', error)
      throw error
    }
  }
}
