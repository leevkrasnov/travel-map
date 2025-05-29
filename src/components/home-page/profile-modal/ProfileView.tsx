import DeleteUserButton from './DeleteUserButton'
import BgImagesProfile from './BgImagesProfile'
import LogoutButton from './LogoutButton'
import UserEmailView from './UserEmailView'
import UserNameInput from './UserNameInput'

export default function ProfileView() {
  return (
    <div className="h-full rounded-t-2xl text-davy-gray bg-gray-50 shadow-lg flex flex-col">
      <div className="shadow-lg xl:mx-32 2xl:mx-60 h-full">
        <BgImagesProfile />
        <div className="z-10 mx-10 lg:mx-60">
          <h1 className="text-3xl lg:text-5xl font-semibold mt-14 lg:mt-20">
            <p>ПЕРСОНАЛЬНЫЕ</p>
            <p className="lg:mt-4">ДАННЫЕ</p>
          </h1>
          <div className="flex flex-1 flex-col justify-between mt-20 lg:mx-32">
            <div>
              <UserNameInput />
              <hr className="text-gray-300 mt-8 mb-4" />
              <UserEmailView />
            </div>

            <div className="flex flex-col justify-center items-center pt-10 lg:pt-6">
              <LogoutButton />
              <DeleteUserButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
