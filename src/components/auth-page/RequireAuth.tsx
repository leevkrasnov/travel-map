import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router'

import { useAuthStore } from '@/store/useAuthStore'
import LoadingSpinner from '../common/LoadingSpinner'

interface RequireAuthProps {
  children: ReactNode
  redirectTo?: string
}

export default function RequireAuth({
  children,
  redirectTo = '/',
}: RequireAuthProps) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const isLoading = useAuthStore((state) => state.isLoading)

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
