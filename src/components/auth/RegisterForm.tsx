import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { RegisterSchema } from '@/types/register.types'
import { RegisterPayload } from '@/types/register.types'
import { RegisterValues } from '@/types/register.types'
import RegisterFormField from '@/components/auth/RegisterFormField'

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterValues>({
    mode: 'onChange',
    resolver: zodResolver(RegisterSchema),
  })

  const onSubmit = async (data: RegisterValues) => {
    const payload: RegisterPayload = {
      email: data.email,
      password: data.password,
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert(JSON.stringify(payload))

    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      <RegisterFormField
        id="email"
        label="Email:"
        type="text"
        placeholder="Email"
        register={register('email')}
        error={errors.email}
      />

      <RegisterFormField
        id="password"
        label="Пароль:"
        type="password"
        placeholder="Пароль"
        register={register('password')}
        error={errors.password}
      />

      <RegisterFormField
        id="confirmPassword"
        label="Подтвердите пароль:"
        type="password"
        placeholder="Подтвердите пароль"
        register={register('confirmPassword')}
        error={errors.confirmPassword}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-gray-800 border-2 border-gray-800 cursor-pointer mt-10 text-white rounded p-2 disabled:bg-gray-400"
      >
        {isSubmitting ? 'Регистрация...' : 'Завершить'}
      </button>
    </form>
  )
}
