import { Link } from 'react-router'
import { ChevronLeft } from 'lucide-react'
import RegisterForm from '@/components/auth-page/RegisterForm'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative flex flex-col h-screen w-screen md:w-[450px] md:h-[600px] pt-32 md:pt-10 px-10 bg-gray-50 rounded-lg shadow-md">
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
