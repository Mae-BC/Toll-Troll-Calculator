import Logo from './Logo'
import TitleCard from './TitleCard'
import '../styles/navbar.css'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { useAuth0 } from '@auth0/auth0-react'

export default function Navbar() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect({ authorizationParams: {redirectUri: `${window.location.origin}/register`} })
  }

  return (
    <div className="navbar">
      <Logo />
      <div className="title-card">
        <TitleCard />
      </div>
      {/* auth stuff */}
      <div className="sign-in">
        <IfAuthenticated>
          <button onClick={handleSignOut}>Sign out</button>
          {user && <p>Signed in as: {user?.nickname}</p>}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <button onClick={handleSignIn}>Sign in</button>
        </IfNotAuthenticated>
      </div>
      {/* auth stuff end */}
    </div>
  )
}
