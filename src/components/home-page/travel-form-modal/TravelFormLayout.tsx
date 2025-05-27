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

export default function TravelFormLayout() {
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
      const coordinates = await getCoordinates(`${data.country}, ${data.city}`)

      await addTravelToFirestore({
        id: crypto.randomUUID(),
        travelCountry: data.country,
        travelCity: data.city,
        travelDateStart: data.dateStart,
        travelDateEnd: data.dateEnd,
        coordinates,
      })

      showAlert(
        'success',
        `ты успешно добавил поездку в ${data.city} (${data.country}с координатами: ${coordinates})`
      )
      reset()
    } catch (error) {
      console.error('Ошибка при добавлении поездки:', error)
      showAlert('error', 'ВНИМАНИЕ! Произошла ошибка, попробуй еще раз')
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
