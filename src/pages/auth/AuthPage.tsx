import { Link } from 'react-router'
import AuthButton from '@/components/auth/AuthButton'

export default function AuthPage() {
  return (
    <div>
      <p>Welcome!</p>
      <nav className="flex flex-col">
        <Link to="/login">
          <AuthButton variant="Вход" />
        </Link>
        <Link to="/register">
          <AuthButton variant="Регистрация" />
        </Link>
      </nav>
    </div>
  )
}
