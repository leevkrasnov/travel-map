import FormField from '@/components/common/FormField'
import FormDate from '@/components/home-page/travel-form-modal/FormDate'
import UniversalButton from '@/components/common/UniversalButton'

import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import type { TravelFormData } from '@/schemas/travelFormSchema'
import BgImagesTravelForm from './BgImagesTravelForm'

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
    <div className="h-full bg-gray-50 text-davy-gray rounded-t-2xl shadow-lg flex flex-col">
      <div className="xl:shadow-lg md:mx-20 xl:mx-32 2xl:mx-60 h-full">
        <BgImagesTravelForm />
        <div className="z-10 mx-10 lg:mx-60">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-14 lg:mt-20">
            <p>ДОБАВИТЬ</p>
            <p className="lg:mt-4">ПУТЕШЕСТВИЕ</p>
          </h1>
          <p className="xl:text-xl text-mount-pink font-normal mt-14 md:mt-20 lg:mx-32">
            Заполни форму — это быстро
          </p>
          <form onSubmit={onSubmit} className="flex flex-col lg:mx-32 mt-2">
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
            <p className="xl:text-xl text-mount-pink font-normal mt-2">
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

            <div className="pt-4 xl:pt-6">
              <UniversalButton variant="ГОТОВО" disabled={isSubmitting} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
