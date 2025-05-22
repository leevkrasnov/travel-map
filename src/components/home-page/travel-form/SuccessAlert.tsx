import { useUserName } from '@/hooks/useUserName'
import { Travel } from '@/types/travelStore.types'

type SuccessAlertProps = Pick<Travel, 'travelCountry' | 'travelCity'>

export default function SuccessAlert({
  travelCountry,
  travelCity,
}: SuccessAlertProps) {
  const userName = useUserName()
  return (
    <div>
      <h1>
        {userName}, ты успешно добавил поездку в {travelCountry}({travelCity})
      </h1>
    </div>
  )
}
