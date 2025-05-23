import { Link } from 'react-router'
import { ChevronLeft } from 'lucide-react'
import RegisterForm from '@/components/auth-page/RegisterForm'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-davy-gray relative flex flex-col h-screen w-screen md:w-[600px] md:h-[80%] px-10 bg-gray-50 rounded-xl shadow-md">
        <section>
          <Link
            to="/Auth"
            className="flex items-center text-xl absolute left-4 top-12 gap-1 text-gray-600 hover:text-flame duration-400 hover:scale-105"
          >
            <ChevronLeft size={40} strokeWidth={1} />
            Назад
          </Link>
          <h1 className="text-5xl font-semibold mt-28 mb-12">РЕГИСТРАЦИЯ</h1>
          <h2 className="mt-14 mb-3 text-lg px-10 text-gray-600">
            Пожалуйста, заполните все поля
          </h2>
        </section>

        <section className="px-10 pb-20">
          <RegisterForm />
        </section>
      </div>
    </div>
  )
}
