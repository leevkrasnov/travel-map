import { Link } from 'react-router'
import RegisterForm from '../../components/auth/RegisterForm'
import { ChevronLeft } from 'lucide-react'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative flex flex-col w-[450px] h-[600px] py-10 px-10 bg-gray-50 rounded-lg shadow-md">
        <section>
          <Link
            to="/Auth"
            className="flex items-center text-xl absolute left-4 gap-1 text-gray-500 hover:text-black duration-400 hover:scale-105"
          >
            <ChevronLeft size={36} strokeWidth={1} />
            Назад
          </Link>
          <h1 className="text-4xl mt-20 mb-12">Регистрация</h1>
        </section>

        <section>
          <RegisterForm />
        </section>
      </div>
    </div>
  )
}
