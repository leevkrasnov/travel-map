import { Link } from 'react-router'
import RegisterForm from '../../components/auth/RegisterForm'
import { ChevronLeft } from 'lucide-react'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative flex flex-col w-[450px] h-[600px] gap-10 py-10 px-16 bg-gray-50 rounded-lg shadow-md">
        <section>
          <Link
            to="/Auth"
            className="flex items-center text-xl absolute left-8 gap-1 text-gray-500 hover:text-black duration-400 hover:scale-105"
          >
            <ChevronLeft size={36} strokeWidth={1} />
            Назад
          </Link>
          <h1 className="text-4xl mt-24 mb-2">Регистрация</h1>
        </section>

        <section>
          <RegisterForm />
        </section>
      </div>
    </div>
  )
}
