import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
  updateProfile,
} from 'firebase/auth'

import { auth } from '../firebase'
import { useAuthStore } from '@/store/useAuthStore'
import { useLoadingStore } from '@/store/useLoadingStore'

export const registerUser = async function (
  userName: string,
  email: string,
  password: string
) {
  try {
    useLoadingStore.getState().setIsLoading(true)
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCredential.user

    await updateProfile(user, {
      displayName: userName,
    })
    await user.reload()
    const updatedUser = auth.currentUser

    useAuthStore.getState().setUser(updatedUser)

    return user
  } catch (error) {
    console.error('Ошибка регистрации пользователя:', error)
    throw error
  } finally {
    useLoadingStore.getState().setIsLoading(false)
  }
}

export const loginUser = async function (email: string, password: string) {
  try {
    useLoadingStore.getState().setIsLoading(true)
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCredential.user

    useAuthStore.getState().setUser(user)

    return user
  } catch (error) {
    console.error('Ошибка авторизации:', error)
    throw error
  } finally {
    useLoadingStore.getState().setIsLoading(false)
  }
}

export const logoutUser = async function () {
  try {
    useLoadingStore.getState().setIsLoading(true)
    await signOut(auth)

    useAuthStore.getState().setUser(null)
  } catch (error) {
    console.error('Не удалось выйти из учетной записи:', error)
    throw error
  } finally {
    useLoadingStore.getState().setIsLoading(false)
  }
}

export const updateUserName = async (newUserName: string) => {
  try {
    useLoadingStore.getState().setIsLoading(true)

    await updateProfile(auth.currentUser!, { displayName: newUserName })

    await auth.currentUser?.reload()

    const updatedName = auth.currentUser?.displayName ?? null

    useAuthStore.getState().setDisplayName(updatedName)
  } catch (error) {
    console.error('Не удалось обновить имя пользователя', error)
    throw error
  } finally {
    useLoadingStore.getState().setIsLoading(false)
  }
}

export const deleteCurrentUser = async () => {
  try {
    useLoadingStore.getState().setIsLoading(true)

    await deleteUser(auth.currentUser!)

    useAuthStore.getState().setUser(null)
  } catch (error) {
    console.error('Не удалось удалить пользователя', error)
    throw error
  } finally {
    useLoadingStore.getState().setIsLoading(false)
  }
}
