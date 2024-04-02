import TollCollectionForm from './TollCollectionForm'

export function ActiveBridge() {
  const bridge = {
    name: 'Grafton Bridge',
    location: 'Grafton Gully',
    type: 'Road bridge',
    year_built: 1910,
    length_meters: 100,
    lanes: 4,
    added_by_user: null,
  }

  return (
    <div>
      <div>Stats</div>
      <div>Picture</div>
      <div>
        <TollCollectionForm bridge={bridge} />
      </div>
    </div>
  )
}
