import { useAuthStore } from '@/store/authStore'

export const useUserName = () => {
  const user = useAuthStore((state) => state.user)
  return user?.displayName?.trim()
}
