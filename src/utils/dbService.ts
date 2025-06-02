import { doc, setDoc, collection, getDocs, deleteDoc } from 'firebase/firestore'

import { auth, db } from '../firebase'
import { useTravelStore } from '@/store/useTravelStore'

import type { Travel } from '@/store/useTravelStore'
import { useLoadingStore } from '@/store/useLoadingStore'

export const addTravelToFirestore = async (travel: Travel) => {
  const currentUser = auth.currentUser?.uid

  if (currentUser) {
    try {
      useLoadingStore.getState().setIsLoading(true)
      const travelId = crypto.randomUUID()
      const travelRef = doc(db, 'users', currentUser, 'travels', travelId)

      await setDoc(travelRef, { ...travel, id: travelId })
    } catch (error) {
      console.error('Ошибка добавления путешествия', error)
      throw error
    } finally {
      useLoadingStore.getState().setIsLoading(false)
    }
  }
}

export const getTravelsFromFirestore = async () => {
  const currentUser = auth.currentUser?.uid

  if (currentUser) {
    try {
      useLoadingStore.getState().setIsLoading(true)
      const travelsRef = collection(db, 'users', currentUser, 'travels')
      const snapshot = await getDocs(travelsRef)

      const travels: Travel[] = snapshot.docs.map((doc) => doc.data() as Travel)

      useTravelStore.getState().setTravels(travels)
    } catch (error) {
      console.error('Ошибка при загрузке поездок:', error)
      throw error
    } finally {
      useLoadingStore.getState().setIsLoading(false)
    }
  }
}

export const deleteTravel = async (travelId: string) => {
  const currentUser = auth.currentUser?.uid

  if (currentUser) {
    try {
      useLoadingStore.getState().setIsLoading(true)
      await deleteDoc(doc(db, 'users', currentUser, 'travels', travelId))
      useTravelStore.getState().removeTravelFromStore(travelId)
    } catch (error) {
      console.error('Ошибка удаления путешествия', error)
      throw error
    } finally {
      useLoadingStore.getState().setIsLoading(false)
    }
  }
}
