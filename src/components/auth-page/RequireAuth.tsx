import { useAuthStore } from '@/store/AuthStore'
import { Navigate, useLocation } from 'react-router'
import { ReactNode } from 'react'
import LoadingSpinner from '../common/LoadingSpinner'

interface RequireAuthProps {
  children: ReactNode
  redirectTo?: string
}

export default function RequireAuth({
  children,
  redirectTo = '/',
}: RequireAuthProps) {
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
