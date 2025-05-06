import { Routes, Route, Navigate } from 'react-router'
import AuthPage from './auth/LoginPage'
import RegisterPage from './auth/RegisterPage'
import HomePage from './home/HomePage'
import TravelFormPage from './home/TravelFormPage'
import ProfilePage from './home/ProfilePage'
import TravelListPage from './home/TravelListPage'

import RequireAuth from '@/components/auth-page/RequireAuth'
import RequireAnon from '@/components/auth-page/RequireAnon'
import HomeLayout from '@/components/home-page/HomeLayout'
import { useAuthListener } from '@/hooks/useAuthListener'

export default function App() {
  useAuthListener()

  return (
    <div className="font-montserrat bg-gray-100">
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
          element={<RequireAuth redirectTo="/">{<HomeLayout />}</RequireAuth>}
        >
          <Route index element={<HomePage />} />
          <Route path="travelList" element={<TravelListPage />} />
          <Route path="add" element={<TravelFormPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}
