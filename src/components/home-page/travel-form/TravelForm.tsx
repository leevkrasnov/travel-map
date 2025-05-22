import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { addTravel } from '@/utils/dbService'
import FormField from '@/components/common/FormField'
import FormFieldDate from '@/components/common/FormFieldDate'
import UniversalButton from '@/components/common/UniversalButton'
import SuccessAlert from './SuccessAlert'

import type { TravelFormValues } from '@/types/travelForm.types'
import { TravelFormSchema } from '@/types/travelForm.types'

export default function TravelForm() {
  const [isAlertVisible, setIsAlertVisible] = useState(false)
  const [addedTravel, setAddedTravel] = useState<{
    travelCountry: string
    travelCity: string
  } | null>(null)

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
      setAddedTravel({ travelCountry: data.country, travelCity: data.city })
      setIsAlertVisible(true)

      console.log(data)
      reset()
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  useEffect(() => {
    if (isAlertVisible) {
      const timer = setTimeout(() => {
        setIsAlertVisible(false)
        setAddedTravel(null)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isAlertVisible])

  return (
    <div className="h-full rounded-t-2xl bg-gray-50 px-8 shadow-lg flex flex-col">
      {isAlertVisible && addedTravel ? (
        <SuccessAlert
          travelCountry={addedTravel.travelCountry}
          travelCity={addedTravel.travelCity}
        />
      ) : (
        <>
          <h1 className="text-4xl mt-10">Добавить путешествие</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-2 mt-10"
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

            <div className="flex flex-row justify-between gap-x-4">
              <FormFieldDate
                id="dateStart"
                label="Дата начала поездки:"
                type="text"
                placeholder="Дата начала"
                register={register('dateStart')}
                error={errors.dateStart}
              />
              <FormFieldDate
                id="dateEnd"
                label="Дата окончания поездки:"
                type="text"
                placeholder="Дата окончания"
                register={register('dateEnd')}
                error={errors.dateEnd}
              />
            </div>

            <UniversalButton variant="ДОБАВИТЬ" disabled={isSubmitting} />
          </form>
        </>
      )}
    </div>
  )
}
