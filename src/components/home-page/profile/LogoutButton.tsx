import { logoutUser } from '@/utils/authService'
import { useNavigate } from 'react-router'

export default function LogoutButton() {
  const navigate = useNavigate()

  const handleLogOut = () => {
    logoutUser()
    navigate('/')
  }

  return (
    <button
      onClick={handleLogOut}
      className="border-2 p-4 bg-red-400 cursor-pointer"
    >
      logOut
    </button>
  )
}
