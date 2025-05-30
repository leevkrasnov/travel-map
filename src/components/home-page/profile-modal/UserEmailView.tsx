import { useUserInfo } from '@/hooks/useUserInfo'

export default function UserEmailView() {
  const { userEmail } = useUserInfo()
  return (
    <div>
      <h1 className="text-mount-pink font-semibold">EMAIL</h1>
      <div className="flex items-center mt-2 border-2 bg-gray-50 border-cadet-gray rounded-sm px-3 md:px-5 h-[45px] md:h-[55px] md:text-xl md:shadow-sm w-full">
        {userEmail}
      </div>
    </div>
  )
}
