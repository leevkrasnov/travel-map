import { z } from 'zod'

export const RegisterFormSchema = z
  .object({
    userName: z.string().min(1, 'Обязательное поле'),
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

export const LoginFormSchema = z.object({
  email: z.string().min(1, 'Обязательное поле').email('Недопустимый формат'),
  password: z.string().min(1, 'Обязательное поле'),
})

export type RegisterFormData = z.infer<typeof RegisterFormSchema>
export type RegisterPayload = Omit<RegisterFormData, 'confirmPassword'>

export type LoginFormData = z.infer<typeof LoginFormSchema>
