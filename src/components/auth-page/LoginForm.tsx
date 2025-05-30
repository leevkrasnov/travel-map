import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { FirebaseError } from 'firebase/app'

import FormField from '@/components/common/FormField'
import UniversalButton from '../common/UniversalButton'
import { loginUser } from '@/utils/authService'
import { handleFirebaseError } from '@/utils/errorHandler'
import PasswordForm from './PasswordForm'
import { useAlertStore } from '@/store/useAlertStore'

import { LoginFormSchema } from '@/schemas/authFormSchema'
import type { LoginFormData } from '@/schemas/authFormSchema'

export default function LoginForm() {
  const navigate = useNavigate()

  const showAlert = useAlertStore((state) => state.showAlert)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormData>({
    mode: 'onChange',
    resolver: zodResolver(LoginFormSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      const user = await loginUser(data.email, data.password)
      navigate('/home')

      setTimeout(() => {
        showAlert('info', `${user?.displayName?.trim()}, с возвращением!`)
      }, 1500)

      reset()
    } catch (error) {
      showAlert('error', 'Пожалуйста, проверь данные и попробуй ещё раз')
      if (error instanceof FirebaseError) {
        handleFirebaseError(error, setError)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="mb-6">
        <FormField
          id="email"
          label="Email:"
          type="text"
          placeholder="Email"
          register={register('email')}
          error={errors.email}
        />
        <PasswordForm
          id="password"
          label="Пароль:"
          placeholder="Пароль"
          register={register('password')}
          error={errors.password}
        />
      </div>

      <UniversalButton variant="ВХОД" disabled={isSubmitting} />
    </form>
  )
}
