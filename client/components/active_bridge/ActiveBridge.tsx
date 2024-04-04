import { useQuery } from '@tanstack/react-query'
import Stats from './Stats'
import TollCollectionForm from './TollCollectionForm'
import { getActiveBridgeForUser } from '../../api/bridge'
import '../../styles/ActiveBridge.css'
import { useAuth0 } from '@auth0/auth0-react'

export function ActiveBridge() {
  const { user, getAccessTokenSilently } = useAuth0()
  const Trollid = user?.sub

  const {
    data: bridge,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['activebridge', Trollid],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      return getActiveBridgeForUser(token)
    },
  })

  if (isError || !bridge) {
    return (
      <div className="active-bridge-container">
        <div className="component-container">
          <h2>You do not have a registered Bridge</h2>
        </div>
        <div className="component-container">
          <h2>Register your bridge now:</h2>
        </div>
        <div className="component-container"></div>
      </div>
    )
  }
  if (isLoading) {
    return (
      <div className="active-bridge-container">
        <div className="component-container"></div>
        <div className="component-container">
          <h2>Loading Your Toll Bridge</h2>
        </div>
        <div className="component-container"></div>
      </div>
    )
  }

  const activeBridge = { ...bridge }
  if (bridge)
    return (
      <div className="active-bridge-container">
        <div className="component-container">
          <Stats data={activeBridge} />
        </div>
        <div className="component-container">
          <img
            src="https://d2rjvl4n5h2b61.cloudfront.net/media/images/nlnzimage_PWZLIhT.width-800.jpg"
            alt=""
          />
        </div>
        <div className="component-container">
          <TollCollectionForm data={activeBridge} />
        </div>
      </div>
    )
}
