import React, { useState } from 'react'
import { BridgeProps } from '../../../models/bridge'

export default function TollCollectionForm(props: BridgeProps) {
  const bridge = props.bridge

  const [toll, setToll] = useState({
    rockCandies: '',
    goldRings: '',
    goats: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget
    Number(value) > -1 && Number(value) < 100
      ? setToll((prev) => ({ ...prev, [name]: value }))
      : null
  }

  const Total = `${toll.goats} 🐐, ${toll.goldRings} 💍, ${toll.rockCandies} 🤘`

  return (
    <div>
      <form>
        <input
          placeholder="Goats🐐"
          value={toll.goats}
          onChange={handleChange}
          name="goats"
          type="number"
        ></input>
        <input
          placeholder="Gold Rings💍"
          value={toll.goldRings}
          onChange={handleChange}
          name="goldRings"
          type="number"
        ></input>
        <input
          placeholder="Rock Candies🤘"
          value={toll.rockCandies}
          onChange={handleChange}
          name="rockCandies"
          type="number"
          max="99"
          maxLength={2}
        ></input>
        <p>Total Toll:{Total}</p>
        <button>Charge Toll</button>
      </form>
    </div>
  )
}
