import { Link } from 'react-router'

import LoginForm from '@/components/auth-page/LoginForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-davy-gray relative flex flex-col h-screen w-screen md:w-[600px] md:h-[80%] px-10 bg-gray-50 rounded-xl shadow-md">
        <h1 className="text-5xl mr-10 font-semibold mt-26">
          <p className="mb-2">ДОБРО</p>
          <p>ПОЖАЛОВАТЬ!</p>
        </h1>
        <h2 className="mt-14 mb-3 text-lg px-10 text-gray-600">
          Войти в аккаунт
        </h2>

        <section className="flex flex-col px-10">
          <LoginForm />
        </section>

        <section className="flex flex-col my-20 text-base gap-2 items-center">
          <p className="text-gray-500">Нeт аккаунта?</p>
          <Link
            to="/register"
            className="text-gray-700 hover:text-flame duration-400 hover:scale-105 text-lg"
          >
            Зарегистрироваться
          </Link>
        </section>
      </div>
    </div>
  )
}
