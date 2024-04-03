import { useQuery } from '@tanstack/react-query'
import Stats from './Stats'
import TollCollectionForm from './TollCollectionForm'
import { getActiveBridgeForUser } from '../../api/bridge'
import './ActiveBridge.css'

export function ActiveBridge() {
  //Dummy data for removal
  const bridge = {
    id: 2,
    name: 'Grafton Bridge',
    location: 'Grafton Gully',
    type: 'Road bridge',
    yearBuilt: 1910,
    lengthMeters: 100,
    lanes: 4,
    addedByUser: null,
    img_url:
      'https://d2rjvl4n5h2b61.cloudfront.net/media/images/nlnzimage_PWZLIhT.width-800.jpg',
    income: '10🐐, 55💍, 12🤘',
  }
  // Needs to be updated with Auth implementation to get a query going with user information
  const Trollid = 1

  // Query that grabs the logged in trolls active bridge as the data
  const {
    data: bridgequery,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['activebridge'],
    queryFn: () => getActiveBridgeForUser(Trollid),
  })

  if (isError) {
    return <p>Unable to retrieve Trolls active bridge</p>
  }
  if (isLoading) {
    return <p>Grabbing your Bridge</p>
  }

  console.log('this is a specific bridge', bridgequery)

  return (
    <div>
      <div>
        <Stats bridge={bridge} />
      </div>
      <div>
        <img src={bridge.img_url} alt="" />
      </div>
      <div>
        <TollCollectionForm data={bridge} />
      </div>
    </div>
  )
}
