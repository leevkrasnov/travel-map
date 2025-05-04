import { Routes, Route, Navigate } from 'react-router'
import AuthPage from './auth/LoginPage'
import RegisterPage from './auth/RegisterPage'
import Home from './home/Home'
import AddTravel from './home/AddTravel'
import Profile from './home/Profile'
import TravelList from './home/TravelList'

import RequireAuth from '@/components/auth-page/RequireAuth'
import RequireAnon from '@/components/auth-page/RequireAnon'
import HomeLayout from '@/components/home-page/HomeLayout'
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
          element={<RequireAuth>{<HomeLayout />}</RequireAuth>}
        >
          <Route index element={<Home />} />
          <Route path="travelList" element={<TravelList />} />
          <Route path="add" element={<AddTravel />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}
