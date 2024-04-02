import { useState } from 'react'
import { BridgeProps } from '../../../models/bridge'

export default function TollCollectionForm(props: BridgeProps) {
  const bridge = props.bridge

  const [collection, setCollection] = useState({
    rockCandies: 0,
    goldRings: 0,
    goats: 0,
  })

  console.log(collection)

  return (
    <div>
      <form>
        <input
          placeholder="Rock Candies"
          value={collection.rockCandies}
        ></input>
        <input placeholder="Gold Rings" value={collection.goldRings}></input>
        <input placeholder="Goats" value={collection.goats}></input>
        <p>Total:</p>
        <button>Submit</button>
      </form>
    </div>
  )
}
