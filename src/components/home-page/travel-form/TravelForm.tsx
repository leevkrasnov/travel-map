import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAlertStore } from '@/store/useAlertStore'
import { addTravel } from '@/utils/dbService'
import FormField from '@/components/common/FormField'
import FormFieldDate from '@/components/common/FormFieldDate'
import UniversalButton from '@/components/common/UniversalButton'

import type { TravelFormValues } from '@/types/travelForm.types'
import { TravelFormSchema } from '@/types/travelForm.types'

export default function TravelForm() {
  const showAlert = useAlertStore((state) => state.showAlert)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TravelFormValues>({
    mode: 'onChange',
    resolver: zodResolver(TravelFormSchema),
  })

  const onSubmit = async (data: TravelFormValues) => {
    try {
      await addTravel({
        travelCountry: data.country,
        travelCity: data.city,
        travelDateStart: data.dateStart,
        travelDateEnd: data.dateEnd,
      })
      showAlert(
        'success',
        `ты успешно добавил поездку в ${data.city} (${data.country})`
      )

      console.log(data)
      reset()
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  return (
    <div className="h-full bg-gray-50 rounded-t-2xl px-8 shadow-lg flex flex-col">
      <img
        src="/src/assets/mountains.svg"
        alt="image-mountains"
        className="pointer-events-none select-none absolute opacity-5 bottom-40 right-6 w-auto h-[60%] object-contain z-0"
      />
      <div className="z-10">
        <h1 className="text-5xl text-davy-gray font-semibold mt-20">
          <p>ДОБАВИТЬ</p>
          <p className="mt-4">ПУТЕШЕСТВИЕ</p>
        </h1>
        <p className="text-xl text-mount-pink font-normal mt-20 mx-32">
          Заполни форму — это быстро
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col px-32 gap-y-4 mt-4"
        >
          <div>
            <FormField
              id="country"
              label="Страна поездки:"
              type="text"
              placeholder="Страна"
              register={register('country')}
              error={errors.country}
            />
            <FormField
              id="city"
              label="Город поездки:"
              type="text"
              placeholder="Город"
              register={register('city')}
              error={errors.city}
            />
          </div>

          <div className="flex flex-row gap-x-8">
            <div className="flex-1">
              <FormFieldDate
                id="dateStart"
                label="Дата начала поездки:"
                type="text"
                placeholder="Дата начала"
                register={register('dateStart')}
                error={errors.dateStart}
              />
            </div>
            <div className="flex-1">
              <FormFieldDate
                id="dateEnd"
                label="Дата окончания поездки:"
                type="text"
                placeholder="Дата окончания"
                register={register('dateEnd')}
                error={errors.dateEnd}
              />
            </div>
          </div>

          <UniversalButton variant="ГОТОВО" disabled={isSubmitting} />
        </form>
      </div>
    </div>
  )
}
