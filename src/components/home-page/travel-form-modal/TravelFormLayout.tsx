import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import TravelFormView from './TravelFormView'
import { useAlertStore } from '@/store/useAlertStore'
import { addTravelToFirestore } from '@/utils/dbService'
import { getCoordinates } from '@/utils/getCoordinates'

import {
  TravelFormSchema,
  type TravelFormData,
} from '@/schemas/travelFormSchema'
import { useUserInfo } from '@/hooks/useUserInfo'

export default function TravelFormLayout() {
  const { displayName } = useUserInfo()

  const showAlert = useAlertStore((state) => state.showAlert)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TravelFormData>({
    mode: 'onChange',
    resolver: zodResolver(TravelFormSchema),
  })

  const onSubmit = async (data: TravelFormData) => {
    try {
      const coords = await getCoordinates(`${data.country}, ${data.city}`)

      await addTravelToFirestore({
        id: crypto.randomUUID(),
        travelCountry: data.country,
        travelCity: data.city,
        travelDateStart: data.dateStart,
        travelDateEnd: data.dateEnd,
        coordinates: coords,
      })
      reset()
      console.log(coords)

      if (!coords) {
        showAlert(
          'info',
          `Я добавил запись, но не смог определить координаты для: ${data.city}, ${data.country}`,
          7000
        )
      } else {
        showAlert(
          'success',
          `${displayName}, ты успешно добавил поездку в ${data.city} (${data.country})`
        )
      }
    } catch (error) {
      console.error('Ошибка при добавлении поездки:', error)
      showAlert(
        'error',
        'Произошла ошибка на сервере. Пожалуйста, повтори операцию'
      )
    }
  }

  return (
    <TravelFormView
      register={register}
      errors={errors}
      isSubmitting={isSubmitting}
      onSubmit={handleSubmit(onSubmit)}
    />
  )
}
