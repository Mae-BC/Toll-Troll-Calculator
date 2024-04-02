import Stats from './Stats'
import TollCollectionForm from './TollCollectionForm'

export function ActiveBridge() {
  const bridge = {
    id: 2,
    name: 'Grafton Bridge',
    location: 'Grafton Gully',
    type: 'Road bridge',
    yearBuilt: 1910,
    lengthMeters: 100,
    lanes: 4,
    addedByUser: null,
    img_url:
      'https://d2rjvl4n5h2b61.cloudfront.net/media/images/nlnzimage_PWZLIhT.width-800.jpg',
    income: '10🐐, 55💍, 12🤘',
  }

  return (
    <div>
      <div>
        <Stats bridge={bridge} />
      </div>
      <div>
        <img src={bridge.img_url} alt="" />
      </div>
      <div>
        <TollCollectionForm bridge={bridge} />
      </div>
    </div>
  )
}
