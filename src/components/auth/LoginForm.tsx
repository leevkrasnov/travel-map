import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FormField from '@/components/auth/FormField'
import AuthButton from './AuthButton'
import { loginUser } from '@/utils/authService'

import { LoginSchema } from '@/types/auth.types'
import { LoginValues } from '@/types/auth.types'
import { FirebaseError } from 'firebase/app'

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginValues>({
    mode: 'onChange',
    resolver: zodResolver(LoginSchema),
  })

  const onSubmit = async (data: LoginValues) => {
    try {
      await loginUser(data.email, data.password)
      reset()
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/user-not-found') {
          setError('email', { message: 'Пользователь не зарегистрирован' })
        } else if (error.code === 'auth/wrong-password') {
          setError('password', { message: 'Пароль не подходит' })
          console.error(error.code)
        } else {
          console.error(error)
        }
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      <FormField
        id="email"
        label="Email:"
        type="text"
        placeholder="Email"
        register={register('email')}
        error={errors.email}
      />

      <FormField
        id="password"
        label="Пароль:"
        type="password"
        placeholder="Пароль"
        register={register('password')}
        error={errors.password}
      />

      <AuthButton variant="Вход" disabled={isSubmitting} />
    </form>
  )
}
