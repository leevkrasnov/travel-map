import { useAuthStore } from '@/store/useAuthStore'

export const useUserName = () => {
  const user = useAuthStore((state) => state.user)
  return user?.displayName?.trim()
}
