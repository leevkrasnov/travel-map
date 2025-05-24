import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'

import { auth } from '../firebase'
import { useAuthStore } from '@/store/useAuthStore'

export const registerUser = async function (
  userName: string,
  email: string,
  password: string
) {
  try {
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
  }
}

export const loginUser = async function (email: string, password: string) {
  try {
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
  }
}

export const logoutUser = async function () {
  try {
    signOut(auth)
    useAuthStore.getState().setUser(null)
  } catch (error) {
    console.error('Не удалось выйти из учетной записи:', error)
    throw error
  }
}
