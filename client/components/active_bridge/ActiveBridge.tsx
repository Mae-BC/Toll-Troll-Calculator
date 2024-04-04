import { useQuery } from '@tanstack/react-query'
import Stats from './Stats'
import TollCollectionForm from './TollCollectionForm'
import { getActiveBridgeForUser } from '../../api/bridge'
import './ActiveBridge.css'

export function ActiveBridge() {
  // Needs to be updated with Auth implementation to get a query going with user information
  const Trollid = 3

  // Query that grabs the logged in trolls active bridge as the data
  const {
    data: bridge,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['activebridge', Trollid],
    queryFn: () => getActiveBridgeForUser(Trollid),
  })

  if (isError || !bridge) {
    return <p>Unable to retrieve Trolls active bridge:{String(error)}</p>
  }
  if (isLoading) {
    return <p>Grabbing your Bridge</p>
  }

  const activeBridge = { ...bridge }
  console.log(activeBridge)

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
