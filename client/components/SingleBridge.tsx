import { useParams } from 'react-router-dom'
import * as api from '../api/bridge'
import { useQuery } from '@tanstack/react-query'

function SingleBridge() {
  const { id } = useParams()

  const {
    data: bridge,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['bridges'],
    queryFn: () => api.getBridgeById(Number(id)),
  })

  if (isLoading) return <div>Loading...</div>
  if (error || !bridge) return <div>Error</div>

  // need to use snake case format from db table for yearBuilt, LengthMeters and AddByUser.
  // Possibly need to update Bridge Model to remove errors below:
  return (
    <div>
      <h1>This is a single Bridge</h1>
      <ul>
        <li>Bridge Name: {bridge.name}</li>
        <li>ID: {bridge.id}</li>
        <li>Location: {bridge.location}</li>
        <li>Type: {bridge.type}</li>
        <li>Year Built: {bridge.year_built}</li>
        <li>Length(meters): {bridge.length_meters}</li>
        <li>Lanes: {bridge.lanes}</li>
        <li>Added By: {bridge.added_by_user}</li>
      </ul>
    </div>
  )
}

export default SingleBridge
