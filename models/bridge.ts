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
  activebridge: number
  added_by_user: null
  auth0: string
  id: string
  lanes: number
  length_meters: number
  location: string
  name: string
  type: string
  year_built: number
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
