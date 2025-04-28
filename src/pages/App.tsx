import { Routes, Route } from 'react-router'
import AuthPage from './auth/AuthPage'
import Login from './auth/Login'
import Register from './auth/Register'
import MainPage from './main/MainPage'
import TripList from './main/TripList'
import TripDetails from './main/TripDetails'

export default function App() {
  return (
    <div className="font-montserrat">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/trips" element={<TripList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/trips/:id" element={<TripDetails />} />
      </Routes>
    </div>
  )
}
