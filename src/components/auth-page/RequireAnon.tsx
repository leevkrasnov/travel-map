import { useAuthStore } from '@/store/authStore'
import { Navigate } from 'react-router'
import LoadingSpinner from '../common/LoadingSpinner'

import { RequireProps } from '@/types/requirePath.types'

export default function RequireAnon({
  children,
  redirectTo = '/home',
}: RequireProps) {
  const { isAuthenticated, isLoading } = useAuthStore()

  if (isLoading) {
    return <LoadingSpinner />
  }

  return isAuthenticated ? <Navigate to={redirectTo} replace /> : children
}
