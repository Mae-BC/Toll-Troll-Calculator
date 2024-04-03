import React from 'react'
import { Bridge } from '../../../models/bridge'
import './ActiveBridge.css'

interface StatsProps {
  bridge: Bridge
}

const Stats: React.FC<StatsProps> = ({ bridge }) => {
  console.log(bridge)
  return (
    <div>
      <h2>{bridge.name} Stats</h2>
      <ul>
        <li>Location: {bridge.location}</li>
        <li>Type: {bridge.type}</li>
        <li>Year Built: {bridge.yearBuilt}</li>
        <li>Length: {bridge.lengthMeters} meters</li>
        <li>Your Troll Tolls Total Income: {bridge.income} </li>
      </ul>
    </div>
  )
}

export default Stats
