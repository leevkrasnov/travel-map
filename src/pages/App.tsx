import { Routes, Route, Navigate } from 'react-router'
import AuthPage from './auth/LoginPage'
import RegisterPage from './auth/RegisterPage'
import MainPage from './home/HomePage'

import RequireAuth from '@/components/auth-page/RequireAuth'
import RequireAnon from '@/components/auth-page/RequireAnon'
import { useAuthListener } from '@/hooks/useAuthListener'

export default function App() {
  useAuthListener()

  return (
    <div className="font-montserrat bg-gray-100">
      <Routes>
        <Route path="/" element={<RequireAnon> {<AuthPage />}</RequireAnon>} />
        <Route
          path="/register"
          element={<RequireAnon> {<RegisterPage />}</RequireAnon>}
        />
        <Route
          path="/home"
          element={<RequireAuth>{<MainPage />}</RequireAuth>}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}
