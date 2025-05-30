import { Link } from 'react-router'
import { ChevronLeft } from 'lucide-react'

import RegisterForm from '@/components/auth-page/RegisterForm'

export default function RegisterPage() {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: '100dvh' }}
    >
      <div className="text-davy-gray relative flex flex-col h-screen w-screen lg:w-[600px] lg:h-[900px] px-8 lg:px-10 bg-gray-50 rounded-xl lg:shadow-lg">
        <section>
          <Link
            to="/Auth"
            className="flex items-center text-lg md:text-xl absolute left-4 top-20 lg:top-12 gap-1 text-gray-600 hover:text-flame duration-400 hover:scale-105"
          >
            <ChevronLeft size={35} strokeWidth={1} />
            Назад
          </Link>
          <h1 className="text-3xl lg:text-5xl font-semibold lg:mt-32 mt-42 mb-8 lg:mb-18">
            РЕГИСТРАЦИЯ
          </h1>
          {/* <h2 className="mt-14 mb-3 text-lg px-10 text-gray-600">
            Пожалуйста, заполните все поля
          </h2> */}
        </section>

        <section className="pb-20 px-8 lg:px-10">
          <RegisterForm />
        </section>
      </div>
    </div>
  )
}
