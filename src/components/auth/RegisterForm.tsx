import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FormField from '@/components/auth/FormField'
import AuthButton from './AuthButton'
import { registerUser } from '@/utils/authService'

import { RegisterSchema } from '@/types/auth.types'
import { RegisterPayload } from '@/types/auth.types'
import { RegisterValues } from '@/types/auth.types'
import { FirebaseError } from 'firebase/app'

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RegisterValues>({
    mode: 'onChange',
    resolver: zodResolver(RegisterSchema),
  })

  const onSubmit = async (data: RegisterPayload) => {
    try {
      await registerUser(data.email, data.password)
      reset()
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/email-already-in-use') {
          setError('email', { message: 'Пользователь уже зарегистрирован' })
        }
        console.error(error.code)
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

      <FormField
        id="confirmPassword"
        label="Подтвердите пароль:"
        type="password"
        placeholder="Подтвердите пароль"
        register={register('confirmPassword')}
        error={errors.confirmPassword}
      />

      <AuthButton variant="Завершить" disabled={isSubmitting} />
    </form>
  )
}
