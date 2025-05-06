import { z } from 'zod'
import { parseDate } from '@/utils/parseDate'

export const TravelFormSchema = z
  .object({
    travelCountry: z.string().min(1, 'Обязательное поле'),
    travelCity: z.string().min(1, 'Обязательное поле'),
    travelDateStart: z
      .string()
      .regex(/^\d{2}\.\d{2}\.\d{4}$/, {
        message: 'Формат: дд.мм.гггг',
      })
      .refine((date) => parseDate(date) !== null, {
        message: 'Несуществующая дата',
      }),
    travelDateEnd: z
      .string()
      .regex(/^\d{2}\.\d{2}\.\d{4}$/, {
        message: 'Формат: дд.мм.гггг',
      })
      .refine((date) => parseDate(date) !== null, {
        message: 'Некорректный формат',
      }),
  })
  .refine(
    (value) => {
      const startDate = parseDate(value.travelDateStart)
      const endDate = parseDate(value.travelDateEnd)
      return startDate !== null && endDate !== null && startDate <= endDate
    },
    {
      message: 'Слишком рано!',
      path: ['travelDateEnd'],
    }
  )

export type TravelFormValues = z.infer<typeof TravelFormSchema>
