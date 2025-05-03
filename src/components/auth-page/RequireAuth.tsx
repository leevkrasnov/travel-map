import { useAuthStore } from '@/store/AuthStore'
import { Navigate, useLocation } from 'react-router'
import LoadingSpinner from '../common/LoadingSpinner'

import { RequireProps } from '@/types/requirePath.types'

export default function RequireAuth({
  children,
  redirectTo = '/',
}: RequireProps) {
  const { isAuthenticated, isLoading } = useAuthStore()
  const location = useLocation()

  if (isLoading) {
    return <LoadingSpinner />
  }

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} replace />
  )
}
