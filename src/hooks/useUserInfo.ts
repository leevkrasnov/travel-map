import { useAuthStore } from '@/store/useAuthStore'

export const useUserInfo = () => {
  const displayName = useAuthStore((state) => state.displayName)?.trim()

  const user = useAuthStore((state) => state.user)

  const userEmail = user?.email

  return { displayName, userEmail }
}
