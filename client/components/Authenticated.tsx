import { useAuth0 } from "@auth0/auth0-react"

const useIsAuthenticated = () => {
  const { isAuthenticated }  = useAuth0()
  return isAuthenticated
}
interface Props {
  children: React.ReactNode
}
export function IfAuthenticated(props: Props) {
  const { children } = props
  return useIsAuthenticated() ? <>{children}</> : null
}

export function IfNotAuthenticated(props: Props) {
  const { children } = props
  return !useIsAuthenticated() ? <>{children}</> : null
}


// to go in nav
// import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
// import { useAuth0 } from '@auth0/auth0-react'

// const { user, logout, loginWithRedirect} = useAuth0()

// const handleSignOut = () => {
//   logout()
// }

// const handleSignIn = () => {
//   loginWithRedirect()
// }

{/* <IfAuthenticated>
<NavButton onClick={handleSignOut}>Sign out</NavButton>
{user && <p>Signed in as: {user?.nickname}</p>}
</IfAuthenticated>
<IfNotAuthenticated>
<NavButton onClick={handleSignIn}>Sign in</NavButton>
</IfNotAuthenticated> */}