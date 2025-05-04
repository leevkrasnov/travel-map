import { MapPinned, CircleUserRound, House, CirclePlus } from 'lucide-react'
import { NavLink } from 'react-router'

const navItems = [
  {
    icon: <House size={32} strokeWidth={1.5} />,
    name: 'Главная',
    path: '/home',
  },
  {
    icon: <MapPinned size={32} strokeWidth={1.5} />,
    name: 'Путешествия',
    path: '/home/travelList',
  },
  {
    icon: <CirclePlus size={32} strokeWidth={1.5} />,
    name: 'Добавить',
    path: '/home/add',
  },
  {
    icon: <CircleUserRound size={32} strokeWidth={1.5} />,
    name: 'Профиль',
    path: '/home/profile',
  },
]

export default function BottomTabBar() {
  return (
    <nav className=" bg-white shadow-md">
      <ul className="flex justify-around items-center h-24">
        {navItems.map((item) => (
          <li
            key={item.name}
            className="flex flex-col items-center justify-center"
          >
            <NavLink
              to={item.path}
              end
              className={({ isActive }) =>
                `flex flex-col items-center duration-500 ${
                  isActive ? 'text-blue-600' : 'text-gray-500'
                }`
              }
            >
              {item.icon}
              {/* <span className="text-sm mt-2">{item.name}</span> */}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
