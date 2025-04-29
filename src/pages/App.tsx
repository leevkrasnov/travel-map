import { Routes, Route } from 'react-router'
import AuthPage from './auth/AuthPage'
import LoginPage from './auth/LoginPage'
import RegisterPage from './auth/RegisterPage'
import MainPage from './main/MainPage'
import TripList from './main/TripList'
import TripDetails from './main/TripDetails'

export default function App() {
  return (
    <div className="font-montserrat bg-gray-100">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/trips" element={<TripList />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/trips/:id" element={<TripDetails />} />
      </Routes>
    </div>
  )
}
