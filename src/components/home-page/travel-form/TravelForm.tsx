import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import FormField from '@/components/common/FormField'
import FormFieldDate from '@/components/common/FormFieldDate'
import UniversalButton from '@/components/common/UniversalButton'

import type { TravelFormValues } from '@/types/travelForm.types'
import { TravelFormSchema } from '@/types/travelForm.types'

export default function TravelForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TravelFormValues>({
    mode: 'onChange',
    resolver: zodResolver(TravelFormSchema),
  })

  const onSubmit = (data: TravelFormValues) => {
    console.log(data)
    reset()
  }

  return (
    <div className="h-full rounded-t-2xl bg-gray-50 px-8 shadow-lg flex flex-col">
      <h1 className="text-4xl mt-10">Добавить путешествие</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 mt-10"
      >
        <div>
          <FormField
            id="travelCountry"
            label="Страна поездки:"
            type="text"
            placeholder="Страна"
            register={register('travelCountry')}
            error={errors.travelCountry}
          />
          <FormField
            id="travelCity"
            label="Город поездки:"
            type="text"
            placeholder="Город"
            register={register('travelCity')}
            error={errors.travelCity}
          />
        </div>

        <div className="flex flex-row justify-between gap-x-4">
          <FormFieldDate
            id="travelDateStart"
            label="Дата начала поездки:"
            type="text"
            placeholder="Дата начала"
            register={register('travelDateStart')}
            error={errors.travelDateStart}
          />
          <FormFieldDate
            id="travelDateEnd"
            label="Дата окончания поездки:"
            type="text"
            placeholder="Дата окончания"
            register={register('travelDateEnd')}
            error={errors.travelDateEnd}
          />
        </div>

        <UniversalButton variant="ДОБАВИТЬ" disabled={isSubmitting} />
      </form>
    </div>
  )
}
