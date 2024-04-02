import { useState } from 'react'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { saveBridge } from '../api/bridge'

//button for every bridge
//onClick use the savebridge function

export default function SaveBridge() {
  const bridgeId = 9
  const trollId = 7
  //   const queryClient = useQueryClient()

  //   const { save, setsave } = useState()

  //   const addMutate = useMutation({
  //     mutationFn: async (bridgeid: number, trollid: number) =>
  //       await api.saveBridge(bridgeid, trollid),
  //     onSuccess: () => {
  //       queryClient.invalidateQueries({ queryKey: ['bridges'] })
  //     },
  //   })

  //   }
  const { mutate } = useMutation(saveBridge)

  const handleClick = () => {
    mutate({ bridgeid: bridgeId, trollid: trollId })
  }

  return (
    <div>
      <button className="Favbutton" onClick={handleClick}>
        Save Bridge
      </button>
    </div>
  )
}
