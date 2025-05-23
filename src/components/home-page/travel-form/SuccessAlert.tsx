import { useUserName } from '@/hooks/useUserName'
import { Travel } from '@/types/travelStore.types'

type SuccessAlertProps = Pick<Travel, 'travelCountry' | 'travelCity'>

export default function SuccessAlert({
  travelCountry,
  travelCity,
}: SuccessAlertProps) {
  const userName = useUserName()
  return (
    <div className="mt-30 mx-10">
      <h1 className="text-5xl font-bold tracking-wider leading-normal">
        {userName}, ты успешно добавил поездку в {travelCountry} ({travelCity})
      </h1>
    </div>
  )
}
