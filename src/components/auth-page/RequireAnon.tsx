import { useAuthStore } from '@/store/AuthStore'
import { Navigate } from 'react-router'
import { ReactNode } from 'react'
import LoadingSpinner from '../common/LoadingSpinner'

interface RequireAuthProps {
  children: ReactNode
  redirectTo?: string
}

export default function RequireAuth({
  children,
  redirectTo = '/home',
}: RequireAuthProps) {
  const { isAuthenticated, isLoading } = useAuthStore()

  if (isLoading) {
    return <LoadingSpinner />
  }

  return isAuthenticated ? <Navigate to={redirectTo} replace /> : children
}
