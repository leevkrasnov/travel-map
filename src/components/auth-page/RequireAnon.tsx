import { ReactNode } from 'react'
import { Navigate } from 'react-router'

import { useAuthStore } from '@/store/useAuthStore'
import LoadingSpinner from '../common/LoadingSpinner'

interface RequireAnonProps {
  children: ReactNode
  redirectTo?: string
}

export default function RequireAnon({
  children,
  redirectTo = '/home',
}: RequireAnonProps) {
  const { isAuthenticated, isLoading } = useAuthStore()

  if (isLoading) {
    return <LoadingSpinner />
  }

  return isAuthenticated ? <Navigate to={redirectTo} replace /> : children
}
