import { Link } from 'react-router'
import LoginForm from '@/components/auth-page/LoginForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative flex flex-col h-screen w-screen md:w-[450px] md:h-[600px] pt-40 md:pt-14 px-10 bg-gray-50 rounded-lg shadow-md">
        <h1 className="text-4xl mr-10">Добро пожаловать!</h1>
        <h2 className="mt-14 mb-3 text-lg text-gray-600">Войти в аккаунт</h2>

        <section className="flex flex-col">
          <LoginForm />
        </section>

        <section className="flex flex-col mt-14 text-base gap-2 items-center">
          <p className="text-gray-500 text-sm">Нeт аккаунта?</p>
          <Link
            to="/register"
            className="text-gray-700 hover:text-black duration-400 hover:scale-105"
          >
            Зарегистрироваться
          </Link>
        </section>
      </div>
    </div>
  )
}
