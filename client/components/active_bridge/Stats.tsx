import { BridgeProps } from '../../../models/bridge'
<<<<<<< HEAD
import { getBridgeRevenueForTroll } from '../../api/bridge'
import '../../styles/ActiveBridge.css'
=======
import { getBridgeRevenueForTroll } from '../../api/bridge.ts'
import './ActiveBridge.css'
>>>>>>> main
import { useQuery } from '@tanstack/react-query'

export default function Stats(props: BridgeProps) {
  const bridge = props.data

  // Needs to be updated with Auth implementation to get a query going with user information
  const trollid = 1
  const bridgeid = bridge.activebridge

  const {
    data: totalrevenue,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['income', trollid],
    queryFn: () => getBridgeRevenueForTroll(trollid, bridgeid),
  })

  if (isError || !bridge) {
    return <p>Unable to retrieve your revenue at this time. {String(error)}</p>
  }
  if (isLoading) {
    return <p>Grabbing your toll data</p>
  }

  const totalRockCandies = totalrevenue?.revenue ?? 0
  const goats = Math.floor(totalRockCandies / 10000)
  const goldRings = Math.floor((totalRockCandies % 10000) / 100)
  const remainingRockCandies = totalRockCandies % 100

  return (
    <div>
      <h2>{bridge.name} Stats</h2>
      <ul>
        <li>
          <strong>Location:</strong> {bridge.location}
        </li>
        <li>
          <strong>Type: </strong>
          {bridge.type}
        </li>
        <li>
          <strong>Year Built: </strong>
          {bridge.year_built}
        </li>
        <li>
          <strong>Length: </strong>
          {bridge.length_meters} meters
        </li>
        <li>
          <strong>Your Troll Tolls Total Income: </strong>
          <hr />
          {goats}🐐
          <br />
          {goldRings}💍
          <br />
          {remainingRockCandies}🤘
        </li>
      </ul>
    </div>
  )
}
