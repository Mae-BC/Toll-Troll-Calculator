import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQuery, useQueryClient, MutationFunction } from '@tanstack/react-query'
import * as API from '../api/registerTroll.ts'

export const useTroll = () => {
  const { user, getAccessTokenSilently } = useAuth0()
  const query = useQuery({queryKey: ['troll'], queryFn: async () => {
    const token = await getAccessTokenSilently()
    return API.getTroll({ token })
    // !!user
  }, enabled: Boolean(user)})
  return {...query, add: useAddTroll()}
}

export const useTrollMutation = <TData = unknown, TVariables = unknown>(mutationFn: MutationFunction<TData, TVariables>) => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['preferences'] })
    }
  })

  return mutation
}

export const useAddTroll = () => {
  return useTrollMutation(API.addTroll)
}