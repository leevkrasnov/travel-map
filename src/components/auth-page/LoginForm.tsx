import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { FirebaseError } from 'firebase/app'

import FormField from '@/components/auth-page/FormField'
import AuthButton from './AuthButton'
import { loginUser } from '@/utils/authService'
import { handleFirebaseError } from '@/utils/errorHandler'

import { LoginFormSchema } from '@/types/auth.types'
import { LoginFormValues } from '@/types/auth.types'

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormValues>({
    mode: 'onChange',
    resolver: zodResolver(LoginFormSchema),
  })

  const navigate = useNavigate()

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await loginUser(data.email, data.password)
      navigate('/home')

      reset()
    } catch (error) {
      if (error instanceof FirebaseError) {
        handleFirebaseError(error, setError)
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
