import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { FirebaseError } from 'firebase/app'

import FormField from '@/components/common/FormField'
import UniversalButton from '../common/UniversalButton'
import { registerUser } from '@/utils/authService'
import { handleFirebaseError } from '@/utils/errorHandler'

import { RegisterFormSchema } from '@/schemas/authFormSchema'
import type { RegisterPayload } from '@/schemas/authFormSchema'
import type { RegisterFormData } from '@/schemas/authFormSchema'

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
      await registerUser(data.userName, data.email, data.password)
      navigate('/home')

      reset()
    } catch (error) {
      if (error instanceof FirebaseError) {
        handleFirebaseError(error, setError)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="mb-6">
        <p className="md:text-lg text-mount-pink mb-3">
          Как я могу к тебе обращаться?
        </p>
        <FormField
          id="userName"
          label="Имя:"
          type="text"
          placeholder="Имя / Псевдоним"
          register={register('userName')}
          error={errors.userName}
          capitalize
        />
        <p className="md:text-lg text-mount-pink mb-3 my-8">
          Укажи свою почту — обещаю не спамить
        </p>
        <FormField
          id="email"
          label="Email:"
          type="text"
          placeholder="Email"
          register={register('email')}
          error={errors.email}
        />
        <p className="md:text-lg text-mount-pink mb-3 my-8">
          Правило только одно: минимум 6 символов
        </p>
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
          label="Подтверди пароль:"
          type="password"
          placeholder="Подтверди пароль"
          register={register('confirmPassword')}
          error={errors.confirmPassword}
        />
      </div>

      <UniversalButton variant="ЗАВЕРШИТЬ" disabled={isSubmitting} />
    </form>
  )
}
