import { Routes, Route } from 'react-router'
import Auth from './Authorization/Auth'
import Login from './Authorization/Login'
import Register from './Authorization/Register'
import TripList from './TripList'
import TripDetails from './TripDetails'

export default function App() {
  return (
    <div className="font-montserrat">
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/trip" element={<TripList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/trip/:id" element={<TripDetails />} />
      </Routes>
    </div>
  )
}
