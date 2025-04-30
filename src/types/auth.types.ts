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
export const RegisterSchema = z
  .object({
    email: z.string().min(1, 'Обязательное поле').email('Недопустимый формат'),
    password: z
      .string()
      .min(1, 'Обязательное поле')
      .min(4, 'Минимум 4 символа'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли должны совпадать',
    path: ['confirmPassword'],
  })

export type RegisterValues = z.infer<typeof RegisterSchema>
export type RegisterPayload = Omit<RegisterValues, 'confirmPassword'>

//LoginForm
export const LoginSchema = z.object({
  email: z.string().min(1, 'Обязательное поле').email('Недопустимый формат'),
  password: z.string().min(1, 'Обязательное поле'),
})

export type LoginValues = z.infer<typeof LoginSchema>
