export interface Bridge {
  id: number
  name: string
  location: string
  type: string
  yearBuilt: number
  lengthMeters: string
  lanes?: number | null
  addedByUser: string
}

export interface BridgeProps {
  data: ActiveBridge
}

export interface ActiveBridge {
  id: string
  name: string
  location: string
  type: string
  yearBuilt: number
  lengthMeters: number
  lanes: number
  addedByUser: null
  auth0: string
  activebridge: number
}

export interface TollAnalytic {
  id: number
  bridgeid: number
  timestamp: Date
  revenue: number
  troll_id: number
}

export interface NewToll {
  bridgeid: number
  revenue: number
  troll_id: number
}

export interface Revenue {
  revenue: number
}

export interface AnalyticRequest {
  trollid: number
  bridgeid: number
}
