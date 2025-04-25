import { Link } from 'react-router'

import ButtonAuth from './ButtonAuth'

export default function Auth() {
  return (
    <div>
      <p>Welcome!</p>
      <div className="flex flex-col">
        <Link to="/login">
          <ButtonAuth variant="Вход" />
        </Link>
        <Link to="/register">
          <ButtonAuth variant="Регистрация" />
        </Link>
      </div>
    </div>
  )
}
