// {
//   name: 'Auckland Harbour Bridge',
//   location: 'Auckland Harbour',
//   type: 'Motorway bridge',
//   year_built: 1959,
//   length_meters: 1020,
//   lanes: 8,
//   added_by_user: null,
// },

return (
  <div>
    <h2>{bridge.name} Stats</h2>
    <ul>
      <li>Location: {bridge.location}</li>
      <li>Type: {bridge.type}</li>
      <li>Year Built: {bridge.yearBuilt}</li>
      <li>Length: {bridge.lengthMeters} meters</li>
    </ul>
  </div>
)
