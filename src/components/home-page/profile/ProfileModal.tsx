import { useBottomBarStore } from '@/store/bottombarStore'

export default function ProfileModal() {
  const startModalChange = useBottomBarStore((state) => state.startModalChange)

  return (
    <div className="h-full rounded-t-lg bg-white p-6 shadow-lg flex flex-col">
      {/* Заголовок */}
      <h1 className="text-lg font-bold">Profile Info</h1>
      {/* Описание */}
      <p className="mt-2 text-sm text-gray-500">
        Here is some information about the profile.
      </p>
      {/* Специально добавленная кнопка закрытия */}
      <button
        onClick={() => startModalChange(null)}
        className="mt-auto rounded bg-blue-500 px-4 py-2 text-white"
      >
        Close
      </button>
    </div>
  )
}
