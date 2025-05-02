import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import { z } from 'zod'

//FormField
export interface FormFieldProps {
  id: string
  label: string
  type: string
  register: UseFormRegisterReturn
  placeholder: string
  error?: FieldError
}

//RegisterForm
export const RegisterFormSchema = z
  .object({
    email: z.string().min(1, 'Обязательное поле').email('Недопустимый формат'),
    password: z
      .string()
      .min(1, 'Обязательное поле')
      .min(6, 'Минимум 6 символов'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли должны совпадать',
    path: ['confirmPassword'],
  })

export type RegisterFormData = z.infer<typeof RegisterFormSchema>
export type RegisterPayload = Omit<RegisterFormData, 'confirmPassword'>

//LoginForm
export const LoginFormSchema = z.object({
  email: z.string().min(1, 'Обязательное поле').email('Недопустимый формат'),
  password: z.string().min(1, 'Обязательное поле'),
})

export type LoginFormValues = z.infer<typeof LoginFormSchema>
