import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FormField from '@/components/auth/FormField'
import AuthButton from './AuthButton'

import { LoginSchema } from '@/types/auth.types'
import { LoginValues } from '@/types/auth.types'

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    mode: 'onChange',
    resolver: zodResolver(LoginSchema),
  })

  const onSubmit = async (data: LoginValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert(JSON.stringify(data))

    reset()
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
