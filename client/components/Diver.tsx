import * as D from '../../common/diver'

export default function Diver(diver: D.Diver) {
  return (
    <div>
      <p>{diver.name}</p>
      <p>{diver.age}</p>
      <p>{diver.qualification}</p>
    </div>
  )
}
