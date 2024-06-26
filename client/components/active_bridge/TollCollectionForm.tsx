import React, { useState } from 'react'
import { BridgeProps, NewToll } from '../../../models/bridge'
import '../../styles/ActiveBridge.css'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { submitTollAnalytic } from '../../api/bridge'

export default function TollCollectionForm(props: BridgeProps) {
  const bridgeid = props.data.activebridge

  const [toll, setToll] = useState({
    rockCandies: '',
    goldRings: '',
    goats: '',
  })

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (toll: NewToll) => submitTollAnalytic(toll),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['income'] })
    },
    onError: (error) => {
      console.log('Submission Failed', error)
    },
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget
    Number(value) > -1 && Number(value) < 100
      ? setToll((prev) => ({ ...prev, [name]: value }))
      : null
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const goldConversion = 100 * Number(toll.goldRings)
    const goatconversion = 10000 * Number(toll.goats)
    const revenue = Number(toll.rockCandies) + goatconversion + goldConversion

    const newToll = {
      bridgeid,
      revenue,
      troll_id: 1,
    }
    mutation.mutate(newToll)
  }

  const Total = `${toll.goats} 🐐, ${toll.goldRings} 💍, ${toll.rockCandies} 🤘`

  return (
    <div>
      <h2>Toll Troll Collection Form</h2>

      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Goats🐐"
            value={toll.goats}
            onChange={handleChange}
            name="goats"
            type="number"
            aria-label="Number of Goats"
          ></input>
        </div>
        <div>
          <input
            placeholder="Gold Rings💍"
            value={toll.goldRings}
            onChange={handleChange}
            name="goldRings"
            type="number"
            max="99"
            maxLength={2}
            aria-label="Number of Gold Rings"
          ></input>
        </div>
        <div>
          <input
            placeholder="Rock Candies🤘"
            value={toll.rockCandies}
            onChange={handleChange}
            name="rockCandies"
            type="number"
            max="99"
            maxLength={2}
            aria-label="Number of Rock Candies"
          ></input>
        </div>
        <p>
          <strong>Total Toll Charge:</strong>
        </p>
        <hr />
        <p>{Total}</p>
        <button>Charge Toll</button>
      </form>
    </div>
  )
}
