import { Link } from 'react-router-dom'
import { getBridges } from '../api/bridge.tsx'
import { useQuery } from '@tanstack/react-query'

export default function Bridges() {
  const {
    data: bridges,
    error,
    isLoading,
  } = useQuery({ queryKey: ['bridges'], queryFn: getBridges })

  if (error) {
    return <p>Your bridges are gone! What a massive error</p>
  }

  if (!bridges || isLoading) {
    return <p>Fetching bridges from auckland...</p>
  }

  return (
    <>
      <h2>Auckland Bridges</h2>
      <ul>
        {bridges.map((bridge) => {
          return (
            <li key={bridge.id}>
              <Link to={`/${bridge.id}`}>{bridge.name}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
