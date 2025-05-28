import FormField from '@/components/common/FormField'
import FormDate from '@/components/home-page/travel-form-modal/FormDate'
import UniversalButton from '@/components/common/UniversalButton'

import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import type { TravelFormData } from '@/schemas/travelFormSchema'
import AnimalsView from './AnimalsView'

interface TravelFormProps {
  register: UseFormRegister<TravelFormData>
  errors: FieldErrors<TravelFormData>
  isSubmitting: boolean
  onSubmit: () => void
}

export default function TravelFormView({
  register,
  errors,
  isSubmitting,
  onSubmit,
}: TravelFormProps) {
  return (
    <div className="h-full bg-gray-50 rounded-t-2xl shadow-lg flex flex-col">
      <AnimalsView />
      <div className="z-10 mx-10 md:mx-60">
        <h1 className="text-3xl lg:text-5xl text-davy-gray font-semibold mt-14 lg:mt-20">
          <p>ДОБАВИТЬ</p>
          <p className="lg:mt-4">ПУТЕШЕСТВИЕ</p>
        </h1>
        <p className="lg:text-xl text-mount-pink font-normal mt-20 lg:mx-32">
          Заполни форму — это быстро
        </p>
        <form onSubmit={onSubmit} className="flex flex-col lg:px-32 mt-2">
          <div>
            <FormField
              id="country"
              label="Страна поездки:"
              type="text"
              placeholder="Страна"
              register={register('country')}
              error={errors.country}
              capitalize
            />
            <FormField
              id="city"
              label="Город поездки:"
              type="text"
              placeholder="Город"
              register={register('city')}
              error={errors.city}
              capitalize
            />
          </div>
          <p className="lg:text-xl text-mount-pink font-normal mt-2">
            Можешь не использовать разделители
          </p>
          <div className="mt-2 flex flex-row gap-x-6">
            <div className="flex-1">
              <FormDate
                id="dateStart"
                label="Дата начала поездки:"
                type="text"
                placeholder="Начало"
                register={register('dateStart')}
                error={errors.dateStart}
              />
            </div>
            <div className="flex-1">
              <FormDate
                id="dateEnd"
                label="Дата окончания поездки:"
                type="text"
                placeholder="Конец"
                register={register('dateEnd')}
                error={errors.dateEnd}
              />
            </div>
          </div>

          <div className="mt-8 lg:mt-5">
            <UniversalButton variant="ГОТОВО" disabled={isSubmitting} />
          </div>
        </form>
      </div>
    </div>
  )
}
