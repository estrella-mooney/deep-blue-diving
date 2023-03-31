import { useAppSelector } from '../hooks/redux'

interface Props {
  dive_id: number
}

export default function DiveViewDivers({ dive_id }: Props) {
  const divers = useAppSelector((state) => {
    const theseJoins = state.joins.filter((j) => j.dive_id === dive_id)
    return state.divers.filter(({ id }) =>
      theseJoins.some(({ diver_id }) => id == diver_id)
    )
  })

  return (
    <ul>
      {divers.map((diver) => (
        <li key={diver.id}>{diver.name}</li>
      ))}
    </ul>
  )
}
