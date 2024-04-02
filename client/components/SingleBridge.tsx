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

  return (
    <div>
      <h1>This is a single Bridge</h1>
      <ul>
        <li>{bridge.name}</li>
      </ul>
    </div>
  )
}

export default SingleBridge
