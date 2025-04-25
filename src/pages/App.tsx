import { Routes, Route } from 'react-router'

import Login from './Login'
import Register from './Register'
import TripList from './TripList'
import TripDetails from './TripDetails'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TripList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/trip/:id" element={<TripDetails />} />
    </Routes>
  )
}
