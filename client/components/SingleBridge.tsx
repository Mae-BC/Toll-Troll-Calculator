import { Link, useParams } from 'react-router-dom'
import * as api from '../api/bridge'
import { useQuery } from '@tanstack/react-query'
import SetActiveBridgeButton from './SetActiveBridgeButton'

function SingleBridge() {
  const { id } = useParams()

  const {
    data: bridge,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['bridge', id],
    queryFn: () => api.getBridgeById(Number(id)),
  })

  if (isLoading) return <div>Loading...</div>
  if (error || !bridge) return <div>Error</div>

  return (
    <div>
      <h1>This is a single Bridge</h1>
      <ul>
        <li>Bridge Name: {bridge.name}</li>
        <li>ID: {bridge.id}</li>
        <li>Location: {bridge.location}</li>
        <li>Type: {bridge.type}</li>
        <li>Year Built: {bridge.yearBuilt}</li>
        <li>Length(meters): {bridge.lengthMeters}</li>
        <li>Lanes: {bridge.lanes}</li>
        <li>Added By: {bridge.addedByUser}</li>
      </ul>
      <SetActiveBridgeButton id={Number(id)} addedByUser={bridge.addedByUser} />
      <Link to={'/'}>
        <button>Back</button>
      </Link>
    </div>
  )
}

export default SingleBridge
