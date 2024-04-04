import { useAuth0 } from '@auth0/auth0-react'
import { useTroll } from '../hooks/useTroll.ts'

export default function SetActiveBridgeButton({ id, addedByUser }: { id: number, addedByUser: string }) {

  const { user, isAuthenticated } = useAuth0()
  const { setBridge, setTroll } = useTroll()

  const setActiveBridge = () => {
    setBridge.mutate({id: id, auth0Id: user?.sub as string})
    setTroll.mutate({id: id, auth0Id: user?.sub as string})
  }

  if (!isAuthenticated) {
    return <></>
  }
  if (addedByUser === user?.sub) {
    return <p>This is your bridge</p>
  }
  if (addedByUser !== user?.sub && addedByUser !== null) {
    return <p>This is not your bridge</p>
  }
  return (
    <>
      <button onClick={setActiveBridge}>Set Active</button>
    </>
  )
}
