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
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const isLoading = useAuthStore((state) => state.isLoading)

  if (isLoading) {
    return <LoadingSpinner />
  }

  return isAuthenticated ? <Navigate to={redirectTo} replace /> : children
}
