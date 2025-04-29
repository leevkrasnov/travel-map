import { Link } from 'react-router'

export default function LoginPage() {
  return (
    <div>
      <p className="text-2xl">Login</p>
      <Link to="/Auth">Back</Link>
    </div>
  )
}
