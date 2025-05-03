import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { FirebaseError } from 'firebase/app'

import FormField from '@/components/auth-page/FormField'
import AuthButton from './AuthButton'
import { registerUser } from '@/utils/authService'
import { handleFirebaseError } from '@/utils/errorHandler'

import { RegisterFormSchema } from '@/types/authForm.types'
import { RegisterPayload } from '@/types/authForm.types'
import { RegisterFormData } from '@/types/authForm.types'

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RegisterFormData>({
    mode: 'onChange',
    resolver: zodResolver(RegisterFormSchema),
  })

  const navigate = useNavigate()

  const onSubmit = async (data: RegisterPayload) => {
    try {
      await registerUser(data.email, data.password)
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
