import { Link } from 'react-router'

import LoginForm from '@/components/auth-page/LoginForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-davy-gray relative flex flex-col h-screen w-screen lg:w-[600px] lg:h-[800px] px-8 lg:px-10 bg-gray-50 rounded-xl shadow-lg">
        <h1 className="lg:text-5xl text-3xl font-semibold lg:mt-26 mt-36">
          <p className="mb-2">ДОБРО</p>
          <p>ПОЖАЛОВАТЬ!</p>
        </h1>
        <h2 className="lg:mt-14 mt-20 mb-3 lg:text-lg px-8 lg:px-10 text-mount-pink">
          Войти в существующий аккаунт
        </h2>

        <section className="flex flex-col px-8 lg:px-10">
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
