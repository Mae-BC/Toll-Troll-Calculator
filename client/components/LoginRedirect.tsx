import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { useTroll } from '../hooks/useTroll.ts'

export default function LoginRedirect() {
  const navigate = useNavigate()
  const { user, getAccessTokenSilently } = useAuth0()
  const troll = useTroll()

  useEffect(() => {
    const res = async () => {
      if (troll.data) {
        navigate('/')
      } else {
        if (troll.isSuccess && user?.sub) {
          const token = await getAccessTokenSilently()
          troll.add.mutate({ newTroll: user?.sub, token })
          navigate('/')
        }
      }
    }
    res()
  }, [navigate, troll, user])

  return (
    <>
      <IfAuthenticated>
        <p>Redirecting...</p>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <p>Please sign in.</p>
      </IfNotAuthenticated>
    </>
  )
}
