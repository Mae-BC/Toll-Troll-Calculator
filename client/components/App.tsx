import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { ActiveBridge } from './active_bridge/ActiveBridge'
import Bridges from './Bridges'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'

export default function AppLayout() {
  return (
    <>
      <main>
        <Navbar />
        <IfAuthenticated>
          <ActiveBridge />
        </IfAuthenticated>
        <div className="bridgesContainer">
          <div className="component-container">
            <Bridges />
          </div>
          <div className="component-container">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  )
}
