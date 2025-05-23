import { Routes, Route, Navigate } from 'react-router'
import AuthPage from './auth/LoginPage'
import RegisterPage from './auth/RegisterPage'
import HomePage from './home/HomePage'

import RequireAuth from '@/components/auth-page/RequireAuth'
import RequireAnon from '@/components/auth-page/RequireAnon'
import { useAuthListener } from '@/hooks/useAuthListener'
import Alert from '@/components/common/Alert'

export default function App() {
  useAuthListener()

  return (
    <div className="font-montserrat bg-gray-100 tracking-wide antialiased">
      <Alert />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAnon redirectTo="/home"> {<AuthPage />}</RequireAnon>
          }
        />
        <Route
          path="/register"
          element={
            <RequireAnon redirectTo="/home"> {<RegisterPage />}</RequireAnon>
          }
        />
        <Route
          path="/home"
          element={<RequireAuth redirectTo="/">{<HomePage />}</RequireAuth>}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}
