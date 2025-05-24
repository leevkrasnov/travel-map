import { useForm } from 'react-hook-form'
import { useYMaps } from '@pbe/react-yandex-maps'
import { zodResolver } from '@hookform/resolvers/zod'

import TravelFormView from './TravelFormView'
import { useAlertStore } from '@/store/useAlertStore'
import { addTravelToFirestore } from '@/utils/dbService'
import { getCoordinates } from '@/utils/getCoordinates'

import {
  TravelFormSchema,
  type TravelFormData,
} from '@/schemas/travelFormSchema'

export default function TravelFormContainer() {
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

  const yamaps = useYMaps(['geocode'])

  const onSubmit = async (data: TravelFormData) => {
    try {
      if (!yamaps) {
        console.error('Yandex Maps API not loaded')
        return
      }

      const coordinates = await getCoordinates(
        yamaps,
        `${data.country}, ${data.city}`
      )

      await addTravelToFirestore({
        travelCountry: data.country,
        travelCity: data.city,
        travelDateStart: data.dateStart,
        travelDateEnd: data.dateEnd,
        coordinates,
        id: crypto.randomUUID(),
      })

      showAlert(
        'success',
        `Ты успешно добавил поездку в ${data.city} (${data.country})`
      )
      reset()
    } catch (error) {
      console.error('Ошибка при добавлении поездки:', error)
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
