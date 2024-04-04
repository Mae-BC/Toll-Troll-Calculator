import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { saveBridge, savedFav } from '../api/bridge'
import { useAuth0 } from '@auth0/auth0-react'
import { useState, useEffect } from 'react'

export default function SaveBridge(props: { id: number }) {
  const { user } = useAuth0()

  const trollid = user?.sub as string

  const bridgeid = props.id
  const data = { bridgeid, trollid }
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: () => saveBridge(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [''] })
      if (isFav === 'Save Bridge') {
        setIsFav('Remove Favorite')
      } else {
        setIsFav('Save Bridge')
      }
    },
  })

  const [isFav, setIsFav] = useState('Save Bridge')

  const { data: favBridges } = useQuery({
    queryKey: ['favBridges'],
    queryFn: () => savedFav(trollid),
    enabled: Boolean(trollid),
  })

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    mutation.mutate()
  }

  useEffect(() => {
    const isBridgeFav =
      favBridges &&
      favBridges.find(
        (bridge: { bridgeid: number }) => bridge.bridgeid === bridgeid,
      )

    if (isBridgeFav) {
      setIsFav('Remove Favorite')
    } else {
      setIsFav('Save Bridge')
    }
  }, [favBridges, bridgeid])

  return (
    <div>
      <button className="Favbutton" onClick={handleClick}>
        {isFav}
      </button>
    </div>
  )
}
