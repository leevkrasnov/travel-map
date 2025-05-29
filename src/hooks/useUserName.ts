import { useAuthStore } from '@/store/useAuthStore'

export const useUserName = () => {
  const displayName = useAuthStore((state) => state.displayName)
  return displayName?.trim()
}
