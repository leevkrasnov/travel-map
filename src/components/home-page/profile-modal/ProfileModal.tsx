import ChangeUserName from './ChangeUserName'

export default function ProfileModal() {
  return (
    <div className="h-full rounded-t-2xl bg-gray-50 px-8 shadow-lg flex flex-col justify-between">
      <div className="flex flex-col gap-y-2 text-xl">
        <h1 className="text-4xl my-10">Персональные данные</h1>
        <ChangeUserName />

        <hr className="text-gray-300 mt-2" />

        <h2 className="text-gray-600 text-base mt-6">EMAIL</h2>
        <p className="px-6 py-2 w-full rounded-lg bg-gray-200">
          leevkrasnov@gmail.com
        </p>
        <hr className="text-gray-300 mt-2" />
      </div>
    </div>
  )
}
