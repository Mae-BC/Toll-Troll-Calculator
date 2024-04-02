import { useQueryClient, useMutation } from '@tanstack/react-query'
import { saveBridge } from '../api/bridge'

export default function SaveBridge(props) {
  const bridgeid = 9
  const trollid = 7
  const data = { bridgeid, trollid }
  // const id = props.props
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: () => saveBridge(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [''] })
    },
  })

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(id)
    mutation.mutate()
  }

  return (
    <div>
      <button className="Favbutton" onClick={handleClick}>
        Save Bridge
      </button>
    </div>
  )
}
