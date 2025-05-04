import { Outlet } from 'react-router'
import BottomTabBar from './BottomTabBar'

export default function HomeLayout() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
      <BottomTabBar />
    </div>
  )
}
