import { z } from 'zod'
import { parseDate } from '@/utils/parseDate'

export const TravelFormSchema = z
  .object({
    country: z.string().min(1, 'Обязательное поле'),
    city: z.string().min(1, 'Обязательное поле'),
    dateStart: z
      .string()
      .regex(/^\d{2}\.\d{2}\.\d{4}$/, {
        message: 'Формат: дд.мм.гггг',
      })
      .refine((date) => parseDate(date) !== null, {
        message: 'Неверный порядок',
      }),
    dateEnd: z
      .string()
      .regex(/^\d{2}\.\d{2}\.\d{4}$/, {
        message: 'Формат: дд.мм.гггг',
      })
      .refine((date) => parseDate(date) !== null, {
        message: 'Неверный порядок',
      }),
  })
  .refine(
    (value) => {
      const parseDateStart = parseDate(value.dateStart)
      const parseEndDate = parseDate(value.dateEnd)
      return (
        parseDateStart !== null &&
        parseEndDate !== null &&
        parseDateStart <= parseEndDate
      )
    },
    {
      message: 'Слишком рано!',
      path: ['dateEnd'],
    }
  )

export type TravelFormData = z.infer<typeof TravelFormSchema>
