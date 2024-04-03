import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { ActiveBridge } from './active_bridge/ActiveBridge'

export default function AppLayout() {
  return (
    <>
      <main>
        <Navbar />
        <ActiveBridge />
        <Outlet />
      </main>
    </>
  )
}
