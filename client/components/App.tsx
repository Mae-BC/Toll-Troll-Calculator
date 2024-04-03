import { Outlet } from 'react-router-dom'
import { ActiveBridge } from './active_bridge/ActiveBridge'

export default function AppLayout() {
  return (
    <>
      <main>
        <Outlet />
        <ActiveBridge />
      </main>
    </>
  )
}
